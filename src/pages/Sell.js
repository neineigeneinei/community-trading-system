import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const Sell = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 实现提交商品信息的逻辑
    console.log('提交的商品信息:', formData);
  };

  return (
    <Box sx={{ padding: '100px 20px 20px 20px', backgroundColor: '#211a21', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
        出售商品
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              padding: 3,
              backgroundColor: '#2d262c',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                name="name"
                label="商品名称"
                value={formData.name}
                onChange={handleInputChange}
                required
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#FFD700',
                  },
                }}
              />
              <TextField
                name="price"
                label="价格 (ETH)"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
                fullWidth
                inputProps={{ step: '0.001', min: '0' }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#FFD700',
                  },
                }}
              />
              <TextField
                name="description"
                label="商品描述"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                required
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#FFD700',
                  },
                }}
              />
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUpload />}
                sx={{
                  color: '#FFD700',
                  borderColor: '#FFD700',
                  '&:hover': {
                    borderColor: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  },
                }}
              >
                上传商品图片
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
              {formData.image && (
                <Typography variant="body2" sx={{ color: '#FFD700' }}>
                  已选择文件: {formData.image.name}
                </Typography>
              )}
              <Button
                type="submit"
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
                发布商品
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sell;