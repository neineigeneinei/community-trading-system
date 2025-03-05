import React from "react";
import { Typography, Box, Paper, Avatar, Rating, Grid, Divider } from "@mui/material";
import { LocalMall, Timeline, Person } from "@mui/icons-material";

const mockSellerData = {
  id: 1,
  name: "牢孙",
  avatar: "/images/A.jpg",
  rating: 4.8,
  totalSales: 2589,
  joinDate: "2023-01-15",
  description: "专注于能源类商品交易，提供优质的交易服务和可靠的商品来源。",
  products: [
    {
      id: 1,
      name: "原油期货",
      price: 0.085,
      image: "/images/product1.jpg",
      category: "能源 - 原油",
      sales: 156
    },
    {
      id: 2,
      name: "天然气",
      price: 0.062,
      image: "/images/product2.jpg",
      category: "能源 - 天然气",
      sales: 89
    },
    {
      id: 3,
      name: "煤炭",
      price: 0.045,
      image: "/images/product3.jpg",
      category: "能源 - 煤炭",
      sales: 234
    }
  ],
  salesHistory: [
    { month: "2024-01", amount: 450 },
    { month: "2023-12", amount: 380 },
    { month: "2023-11", amount: 520 },
    { month: "2023-10", amount: 320 },
    { month: "2023-09", amount: 400 },
    { month: "2023-08", amount: 519 }
  ]
};

export default function SellerDetail() {
  return (
    <Box sx={{ padding: "100px 20px 20px 20px", backgroundColor: "#211a21", minHeight: "100vh" }}>
      {/* 卖家基本信息卡片 */}
      <Paper
        sx={{
          backgroundColor: "#2d262c",
          padding: 3,
          marginBottom: 3,
          color: "white",
          borderRadius: 2
        }}
      >
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 3 }}>
          <Avatar
            src={mockSellerData.avatar}
            sx={{ width: 120, height: 120, border: "2px solid #FFD700" }}
          />
          <Box>
            <Typography variant="h4" sx={{ color: "#FFD700", marginBottom: 1 }}>
              {mockSellerData.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
              <Rating value={mockSellerData.rating} precision={0.1} readOnly />
              <Typography sx={{ color: "#FFD700" }}>{mockSellerData.rating}</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "#888" }}>
              加入时间：{mockSellerData.joinDate}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ color: "white" }}>
          {mockSellerData.description}
        </Typography>
      </Paper>

      {/* 销售统计 */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              backgroundColor: "#2d262c",
              padding: 3,
              color: "white",
              borderRadius: 2,
              height: "100%"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
              <LocalMall sx={{ color: "#FFD700", fontSize: 40 }} />
              <Typography variant="h6">总销售额</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: "#FFD700" }}>
              {mockSellerData.totalSales} ETH
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              backgroundColor: "#2d262c",
              padding: 3,
              color: "white",
              borderRadius: 2,
              height: "100%"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
              <Timeline sx={{ color: "#FFD700", fontSize: 40 }} />
              <Typography variant="h6">月度销量</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: "#FFD700" }}>
              {mockSellerData.salesHistory[0].amount} ETH
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              backgroundColor: "#2d262c",
              padding: 3,
              color: "white",
              borderRadius: 2,
              height: "100%"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
              <Person sx={{ color: "#FFD700", fontSize: 40 }} />
              <Typography variant="h6">商品数量</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: "#FFD700" }}>
              {mockSellerData.products.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 在售商品 */}
      <Typography variant="h5" sx={{ color: "white", marginBottom: 2 }}>
        在售商品
      </Typography>
      <Grid container spacing={3}>
        {mockSellerData.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper
              sx={{
                backgroundColor: "#2d262c",
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(255,215,0,0.2)"
                }
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  overflow: "hidden"
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
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{ color: "#FFD700", marginBottom: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#888", marginBottom: 1 }}>
                  {product.category}
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  {product.price} ETH
                </Typography>
                <Typography variant="body2" sx={{ color: "#888" }}>
                  销量: {product.sales}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}