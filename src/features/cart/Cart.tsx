import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type {RootState, AppDispatch} from '../../app/store';
import { Box, Typography, IconButton, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart, updateQuantity } from './cartSlice';

const Cart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.cart.items);

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" mb={2}>Корзина</Typography>
            {items.length === 0 ? (
                <Typography>Корзина пуста</Typography>
            ) : (
                <>
                    <List>
                        {items.map(item => (
                            <React.Fragment key={item.id}>
                                <ListItem
                                    secondaryAction={
                                        <>
                                            <TextField
                                                type="number"
                                                inputProps={{ min: 1 }}
                                                value={item.quantity}
                                                onChange={e =>
                                                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                                                }
                                                size="small"
                                                sx={{ width: 60, mr: 2 }}
                                            />
                                            <IconButton edge="end" onClick={() => dispatch(removeFromCart(item.id))}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            src={item.image}
                                            variant="square"
                                            sx={{ width: 56, height: 56, mr: 2 }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={`Цена: $${item.price}`}
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                    <Typography variant="h6" mt={2}>
                        Итого: ${totalPrice.toFixed(2)}
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default Cart;
