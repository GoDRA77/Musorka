import React from 'react';
import type {Product} from '../../types/product';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/store';
import { addToCart } from '../cart/cartSlice';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', cursor: 'pointer' }}
                onClick={() => navigate(`/products/${product.id}`)}
            />
            <CardContent>
                <Typography variant="h6" noWrap>{product.title}</Typography>
                <Typography variant="body1" color="text.secondary">${product.price}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`/products/${product.id}`)}>Подробнее</Button>
                <Button size="small" onClick={() => dispatch(addToCart(product))}>Добавить в корзину</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
