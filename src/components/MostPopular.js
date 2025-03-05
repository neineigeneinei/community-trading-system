import React, { useState } from "react";
import { Typography, Box, Paper, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";

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

export default function MostPopular() {
  const [hoveredSeller, setHoveredSeller] = useState(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginLeft: "100px",
        marginRight: "100px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          marginBottom: "30px",
        }}
      >
        最受欢迎卖家
      </Typography>

      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgb(45, 38, 44)",
          padding: "40px",
          borderRadius: 2,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
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
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          {[...sellers, ...sellers].map((seller, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredSeller(seller)}
              onMouseLeave={() => setHoveredSeller(null)}
              sx={{ position: "relative" }}
            >
              <Paper
                onClick={() => navigate(`/seller/${seller.id}`)}
                sx={{
                  cursor: "pointer",
                  width: "200px",
                  padding: 2,
                  backgroundColor: "rgb(45, 38, 44)",
                  border: "1px solid white",
                  borderRadius: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={seller.image}
                    alt={seller.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  {seller.name}
                </Typography>
              </Paper>

              <Fade in={hoveredSeller?.id === seller.id}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(28, 26, 26, 0.8)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    borderRadius: 2,
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
