import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

// 模拟热卖商品数据
const hotItems = [
  {
    name: "Corn",
    image: "/images/corn.jpg",
    price: "0.1 ETH/Kg",
  },
  {
    name: "Nickel",
    image: "/images/ni.png",
    price: "0.2 ETH/Kg",
  },
  {
    name: "Egg",
    image: "/images/egg.png",
    price: "0.3 ETH/Kg",
  },
];

export default function MyCarousel() {
  return (
    <div>
      {/* 轮播器 */}
      <Box
        sx={{
          marginTop: "2px",
          width: "1312px",
        }}
      >
        <Carousel animation="slide" navButtonsAlwaysVisible duration={800}>
          {hotItems.map((item, index) => (
            <Box key={index} sx={{ position: "relative", textAlign: "left" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  transform: "none",
                  color: "white",
                  padding: 1,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: "0.8em" }}>floor: {item.price}</span>
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>{" "}
    </div>
  );
}
