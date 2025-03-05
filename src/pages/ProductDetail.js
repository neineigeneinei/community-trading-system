import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper, Grid } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 模拟从API获取商品详细信息
    const mockProduct = {
      id: parseInt(id),
      name: `商品${id}`,
      price: (Math.random() * 0.09 + 0.01).toFixed(3),
      mainCategory: "农产品",
      subCategory: "谷物",
      image: `/images/product${(parseInt(id) % 8) + 1}.jpg`,
      sales: Math.floor(Math.random() * 1000),
      description: "这是一个高质量的商品，具有优秀的性能和可靠的品质。我们提供最好的服务和最优惠的价格。",
      specifications: {
        产地: "中国",
        规格: "标准",
        包装: "专业",
        储存条件: "常温"
      }
    };
    setProduct(mockProduct);
  }, [id]);

  if (!product) {
    return (
      <Box
        sx={{
          padding: "20px 104px 0 104px",
          backgroundColor: "#211a21",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          加载中...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "20px 104px 0 104px",
        backgroundColor: "#211a21",
        minHeight: "100vh"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFD700",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        商品详情
      </Typography
    >
      <Grid container spacing={4}>
        {/* 商品图片 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: "#2d262c",
              borderRadius: 2
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 400,
                overflow: "hidden",
                borderRadius: 1
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* 商品信息 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              backgroundColor: "#2d262c",
              color: "white",
              borderRadius: 2
            }}
          >
            <Typography variant="h4" sx={{ color: "#FFD700", marginBottom: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="h5" sx={{ color: "#FFD700", marginBottom: 2 }}>
              {product.price} ETH
            </Typography>
            <Typography variant="body1" sx={{ color: "#888", marginBottom: 2 }}>
              类目: {product.mainCategory} - {product.subCategory}
            </Typography>
            <Typography variant="body1" sx={{ color: "#888", marginBottom: 2 }}>
              销量: {product.sales} 件
            </Typography>
            <Typography variant="h6" sx={{ color: "#FFD700", marginTop: 3, marginBottom: 1 }}>
              商品描述
            </Typography>
            <Typography variant="body1" sx={{ color: "white", marginBottom: 3 }}>
              {product.description}
            </Typography>
            <Typography variant="h6" sx={{ color: "#FFD700", marginBottom: 1 }}>
              规格参数
            </Typography>
            {Object.entries(product.specifications).map(([key, value]) => (
              <Typography key={key} variant="body1" sx={{ color: "white", marginBottom: 1 }}>
                {key}: {value}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;