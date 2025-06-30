import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type {RootState, AppDispatch} from '../../app/store';
import { Grid, Button, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { toggleCategory } from './productsSlice';

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredItems, categories, selectedCategories } = useSelector((state: RootState) => state.products);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" mb={2}>Категории</Typography>
            <Box mb={3}>
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={selectedCategories.includes(category) ? 'contained' : 'outlined'}
                        onClick={() => dispatch(toggleCategory(category))}
                        sx={{ mr: 1, mb: 1, textTransform: 'capitalize' }}
                    >
                        {category}
                    </Button>
                ))}
            </Box>

            <Grid container spacing={2}>
                {filteredItems.map(product => (
                    <Grid
                        key={product.id}
                        item={true}
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;