import React from 'react';
import { Box, Typography, Grid, Paper, Button, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Cart = () => {
  // 模拟购物车数据
  const cartItems = [
    { id: 1, name: '商品1', price: 0.05, quantity: 2, image: '/images/product1.jpg' },
    { id: 2, name: '商品2', price: 0.03, quantity: 1, image: '/images/product2.jpg' },
    { id: 3, name: '商品3', price: 0.07, quantity: 3, image: '/images/product3.jpg' },
  ];

  // 计算总价
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: '100px 20px 20px 20px', backgroundColor: '#211a21', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
        购物车
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Paper
              key={item.id}
              sx={{
                padding: 2,
                backgroundColor: '#2d262c',
                color: 'white',
                marginBottom: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  marginRight: 2,
                  overflow: 'hidden',
                  borderRadius: 1,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ color: '#FFD700' }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#FFD700' }}>
                  {item.price.toFixed(3)} ETH
                </Typography>
                <Typography variant="body2" sx={{ color: '#888' }}>
                  数量: {item.quantity}
                </Typography>
              </Box>
              <IconButton
                sx={{
                  color: '#FFD700',
                  '&:hover': {
                    color: '#ff4444',
                  },
                }}
              >
                <Delete />
              </IconButton>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: '#2d262c',
              color: 'white',
              position: 'sticky',
              top: 100,
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFD700', marginBottom: 2 }}>
              订单摘要
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              商品总数: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </Typography>
            <Typography variant="h6" sx={{ color: '#FFD700', marginBottom: 2 }}>
              总计: {total.toFixed(3)} ETH
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#FFD700',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#FFC000',
                },
              }}
            >
              结算
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;