import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Container,
  Box,
  Avatar,
  Paper,
  Fade,
  Slide,
} from "@mui/material";
import { AccountCircle, Search } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel"; // 安装轮播组件库
import "./App.css"; // 自定义样式
import MyCarousel from "./components/MyCarousel";
import Display from "./components/Display";
import LowPrice from "./components/LowPrice";
import Bottom from "./components/Bottom";
import MostPopular from "./components/MostPopular";

function App() {
  const [hoveredSeller, setHoveredSeller] = useState(null);

  // 连接 MetaMask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        alert(`Connected account: ${accounts[0]}`);
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div className="App">
      <AppBar position="fixed" sx={{ backgroundColor: "#FFD700" }}>
        {/* 导航栏 */}
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
            <img
              src="/logo2.png"
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
          </Box>
          {/* 标题 */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            链宗
          </Typography>

          {/* 中间的搜索框 */}
          <Box sx={{ flexGrow: 20, display: "flex" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="搜索商品..."
              sx={{
                width: "800px", // 设置搜索框宽度
                backgroundColor: "white",
                borderRadius: 1,
              }}
              InputProps={{
                startAdornment: (
                  <Search sx={{ color: "gray", marginRight: 2 }} />
                ),
              }}
            />
          </Box>

          {/* 订单管理按钮 */}
          <Button color="inherit" sx={{ marginRight: 2 }}>
            订单管理
          </Button>

          {/* 连接 MetaMask 按钮 */}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#211a21", color: "white" }}
            startIcon={<AccountCircle />}
            onClick={connectMetaMask}
          >
            连接钱包
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", marginTop: "64px" }}>
        {/* 主页 */}
        <Box
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyCarousel />
        </Box>
      </Box>

      {/* 最受欢迎卖家 */}
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
