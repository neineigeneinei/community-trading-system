import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Fade } from "@mui/material";
import "../App.css"; // 自定义样式

// 模拟卖家数据
const sellers = [
  {
    id: 1,
    name: "No.1",
    avatar: "https://via.placeholder.com/50",
    image: "/images/A.jpg",
    info: "Name: 牢孙 Volume: 2589",
  },
  {
    id: 2,
    name: "No.2",
    avatar: "https://via.placeholder.com/50",
    image: "/images/B.jpg",
    info: "Name: 科匕匕 Volume: 2385",
  },
  {
    id: 3,
    name: "No.3",
    avatar: "https://via.placeholder.com/50",
    image: "/images/C.jpg",
    info: "Name: 男人 Volume: 2118",
  },
  {
    id: 4,
    name: "No.4",
    avatar: "https://via.placeholder.com/50",
    image: "/images/D.jpg",
    info: "Name: 哈哈哈 Volume: 1889",
  },
  {
    id: 5,
    name: "No.5",
    avatar: "https://via.placeholder.com/50",
    image: "/images/E.jpg",
    info: "Name: 罐子 Volume: 1869",
  },
  {
    id: 6,
    name: "No.6",
    avatar: "https://via.placeholder.com/50",
    image: "/images/F.jpg",
    info: "Name: 出去 Volume: 1745",
  },
];

/* 最受欢迎卖家 */
export default function MostPopular() {
  const [products, setProducts] = useState([]);
  const [hoveredSeller, setHoveredSeller] = useState(null);

  return (
    <Box
      sx={{
        marginLeft: "100px",
        marginRight: "100px",
      }}
    >
      {/* 最受欢迎卖家标题 */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          padding: "30px",
        }}
      >
        最受欢迎卖家
      </Typography>

      {/* 卖家信息 */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          backgroundColor: "rgb(45, 38, 44)",
          color: "white",
          padding: "40px",
          borderRadius: 2,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          overflowX: "hidden",
          position: "relative",
          "&:hover .seller-container": {
            animationPlayState: "paused",
          },
        }}
      >
        <Box
          className="seller-container"
          sx={{
            display: "flex",
            gap: 4,
            animation: "scroll 30s linear infinite",
            "@keyframes scroll": {
              "0%": {
                transform: "translateX(0)",
              },
              "100%": {
                transform: "translateX(-100%)",
              },
            },
          }}
        >
          {[...sellers, ...sellers].map((seller, index) => (
            <Box
              key={`${seller.id}-${index}`}
              onMouseEnter={() => setHoveredSeller(seller)}
              onMouseLeave={() => setHoveredSeller(null)}
              sx={{ position: "relative", minWidth: "200px" }}
            >
              <Paper
                sx={{
                  textAlign: "center",
                  backgroundColor: "rgb(45, 38, 44)",
                  borderRadius: 2,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid white",
                  padding: "15px",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={seller.image}
                  alt={seller.name}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "contain",
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: 2,
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {seller.name}
                </Typography>
              </Paper>
              {/* 鼠标悬停时显示买家信息 */}
              <Fade in={hoveredSeller?.id === seller.id}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "0px",
                    left: 0,
                    padding: 2,
                    backgroundColor: "rgba(139, 109, 109, 0.8)",
                    color: "white",
                    borderRadius: 2,
                    zIndex: 1,
                    width: "180px",
                    textAlign: "center",
                    height: "210px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {seller.info}
                </Paper>
              </Fade>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
