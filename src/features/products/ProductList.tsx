import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type {RootState} from '../../app/store';
import { fetchProducts } from './productsSlice';
import ProductCard from './ProductCard';
import { Grid, CircularProgress, Alert } from '@mui/material';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts() as any); // TS каст из-за thunk
    }, [dispatch]);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Grid container spacing={2}>
            {items.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
