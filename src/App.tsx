import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import Cart from './features/cart/Cart';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const ProductDetails = lazy(() => import('./features/products/ProductDetails'));

const App: React.FC = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Магазин товаров
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Товары</Button>
                    <Button color="inherit" component={Link} to="/cart">Корзина</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 3 }}>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<div>404. Страница не найдена</div>} />
                    </Routes>
                </Suspense>
            </Container>
        </Router>
    );
};

export default App;
