import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const Buy = () => {
  return (
    <Box sx={{ padding: '100px 20px 20px 20px', backgroundColor: '#211a21', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
        商品列表
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: '#2d262c',
                color: 'white',
                textAlign: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(255,215,0,0.2)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  marginBottom: 2,
                  overflow: 'hidden',
                  borderRadius: 1,
                }}
              >
                <img
                  src={`/images/product${item}.jpg`}
                  alt={`商品${item}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ color: '#FFD700', marginBottom: 1 }}>
                商品 {item}
              </Typography>
              <Typography variant="body1" sx={{ color: '#FFD700' }}>
                {(Math.random() * 0.09 + 0.01).toFixed(3)} ETH
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', marginTop: 1 }}>
                销量: {Math.floor(Math.random() * 1000)} 件
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Buy;