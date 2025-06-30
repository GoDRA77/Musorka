import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../../types/product';
import { products as allProducts } from '../../mocks/products';
import { Box, Typography, CircularProgress, Rating, Button, Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice'; // Предполагается, что у вас есть такой action

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const prod = allProducts.find(p => p.id === Number(id));
        setProduct(prod || null);
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

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    if (!product) {
        return <Box sx={{ padding: 2 }}><CircularProgress /></Box>;
    }

    return (
        <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', objectFit: 'contain', maxHeight: 400 }}
            />
            <Typography variant="h4" mt={2}>{product.title}</Typography>
            <Typography variant="h6" color="text.secondary" mt={1}>
                Категория: {product.category}
            </Typography>
            <Typography variant="body1" mt={2}>{product.description}</Typography>
            <Typography variant="h5" mt={2}>${product.price}</Typography>
            <Box mt={2} display="flex" alignItems="center">
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <Typography ml={1}>({product.rating.count} отзывов)</Typography>
            </Box>

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                sx={{ mt: 3 }}
                fullWidth
            >
                Добавить в корзину
            </Button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Товар добавлен в корзину!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ProductDetails;