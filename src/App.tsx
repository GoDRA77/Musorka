import React, { Suspense, lazy, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import Cart from './features/cart/Cart';
import LoginPage from './pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { AuthContext } from './context/AuthContext';

const ProductDetails = lazy(() => import('./features/products/ProductDetails'));

const App: React.FC = () => {
    const { user, logout } = useContext(AuthContext); // ⬅️ используем контекст

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
                    >
                        Магазин товаров
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Товары</Button>
                    <Button color="inherit" component={Link} to="/cart">Корзина</Button>
                    {user && (
                        <Button color="inherit" onClick={logout}>Выйти</Button>
                    )}
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 3 }}>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
                        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                        <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
                        <Route path="*" element={<div>404. Страница не найдена</div>} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
};

export default App;
