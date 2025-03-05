import React from "react";
import "./App.css"; // 自定义样式
import MyCarousel from "./components/MyCarousel";
import Display from "./components/Display";
import LowPrice from "./components/LowPrice";
import Bottom from "./components/Bottom";
import MostPopular from "./components/MostPopular";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* 主页 */}
      <Box
        sx={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          padding: 5,
          alignItems: "center",
        }}
      >
        <MyCarousel />
      </Box>

      {/* 限时低价 */}
      <MostPopular />

      {/* 限时低价 */}
      <LowPrice />

      {/* 商品展示 */}
      <Display />

      {/* 底部 */}
      <Bottom />
    </div>
  );
}

export default App;
