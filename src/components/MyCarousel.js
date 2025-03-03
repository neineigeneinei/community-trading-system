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
          marginTop: "50px",
          width: "1300px",
        }}
      >
        <Carousel animation="fade" navButtonsAlwaysVisible>
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
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "yellow",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 1,
                  borderRadius: 2,
                }}
              >
                {item.name} - {item.price}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>{" "}
    </div>
  );
}
