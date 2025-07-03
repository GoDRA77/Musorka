import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type {Product} from '../../types/product';
import { Box, Typography, CircularProgress, Rating, Button, Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!res.ok) throw new Error('Ошибка загрузки');
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError('Не удалось загрузить товар');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            }));
            setOpenSnackbar(true);
        }
    };

    if (loading) return <Box p={3}><CircularProgress /></Box>;
    if (error || !product) return <Box p={3}><Alert severity="error">{error || 'Товар не найден'}</Alert></Box>;

    return (
        <Box p={3} maxWidth={600} mx="auto">
            <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: 400, objectFit: 'contain' }} />
            <Typography variant="h4" mt={2}>{product.title}</Typography>
            <Typography variant="h6" color="text.secondary" mt={1}>Категория: {product.category}</Typography>
            <Typography variant="body1" mt={2}>{product.description}</Typography>
            <Typography variant="h5" mt={2}>${product.price}</Typography>
            <Box mt={2} display="flex" alignItems="center">
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <Typography ml={1}>({product.rating.count} отзывов)</Typography>
            </Box>
            <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleAddToCart}>
                Добавить в корзину
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
                <Alert severity="success">Товар добавлен в корзину</Alert>
            </Snackbar>
        </Box>
    );
};

export default ProductDetails;
