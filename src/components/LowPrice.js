import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import "../App.css"; // 自定义样式

export default function LowPrice() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* 限时低价标题和按钮 */}
      <Box
        sx={{
          padding: "20px 104px 0 104px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          限时低价
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#FFD700",
            borderColor: "#FFD700",
            "&:hover": {
              borderColor: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
            },
          }}
        >
          了解更多
        </Button>
      </Box>

      {/* 限时低价商品展示 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4.8,
          padding: "30px",
          backgroundColor: "#211a21",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Paper
            key={item}
            sx={{
              width: 200,
              padding: 2,
              backgroundColor: "#2d262c",
              color: "white",
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(255,215,0,0.2)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFD700",
                marginBottom: 1,
                fontWeight: "bold",
              }}
            >
              限时低价
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 150,
                marginBottom: 1,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <img
                src={`/images/flash${item}.jpg`}
                alt={`限时商品${item}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: "#FFD700" }}>
              {(Math.random() * 0.09 + 0.01).toFixed(3)} ETH
            </Typography>
            <Typography variant="body2" sx={{ color: "#888" }}>
              原价: {(Math.random() * 0.09 + 0.01).toFixed(3)} ETH
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* 热门产品标题和按钮 */}
      <Box
        sx={{
          padding: "20px 104px 0 104px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          热门产品
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#FFD700",
            borderColor: "#FFD700",
            "&:hover": {
              borderColor: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
            },
          }}
        >
          了解更多
        </Button>
      </Box>
      {/* 热门产品展示 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4.8,
          padding: "30px",
          backgroundColor: "#211a21",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Paper
            key={item}
            sx={{
              width: 200,
              padding: 2,
              backgroundColor: "#2d262c",
              color: "white",
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(255,215,0,0.2)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFD700",
                marginBottom: 1,
                fontWeight: "bold",
              }}
            >
              热门产品
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 150,
                marginBottom: 1,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <img
                src={`/images/hot${item}.jpg`}
                alt={`热门商品${item}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: "#FFD700" }}>
              {(Math.random() * 0.09 + 0.01).toFixed(3)} ETH
            </Typography>
            <Typography variant="body2" sx={{ color: "#888" }}>
              销量: {Math.floor(Math.random() * 1000)} 件
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* 最近上新标题和按钮 */}
      <Box
        sx={{
          padding: "20px 104px 0 104px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          最近上新
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#FFD700",
            borderColor: "#FFD700",
            "&:hover": {
              borderColor: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
            },
          }}
        >
          了解更多
        </Button>
      </Box>
      {/* 最近上新展示 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4.8,
          padding: "30px",
          backgroundColor: "#211a21",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Paper
            key={item}
            sx={{
              width: 200,
              padding: 2,
              backgroundColor: "#2d262c",
              color: "white",
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(255,215,0,0.2)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFD700",
                marginBottom: 1,
                fontWeight: "bold",
              }}
            >
              最近上新
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 150,
                marginBottom: 1,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <img
                src={`/images/new${item}.jpg`}
                alt={`最新商品${item}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: "#FFD700" }}>
              {(Math.random() * 0.09 + 0.01).toFixed(3)} ETH
            </Typography>
            <Typography variant="body2" sx={{ color: "#888" }}>
              上新时间: {Math.floor(Math.random() * 24)}小时前
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
