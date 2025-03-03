import React from "react";
import { Typography, Box, Paper } from "@mui/material";

/* 商品展示区域 */

export default function Display() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#211a21",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFD700",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        商品展示区
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
          width: "80%",
          maxWidth: "1200px",
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <Paper
            key={index}
            sx={{
              padding: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                marginBottom: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={`https://via.placeholder.com/200x200?text=商品${
                  index + 1
                }`}
                alt={`商品${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              商品 {index + 1}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              价格: {(Math.random() * 10).toFixed(2)} ETH
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
