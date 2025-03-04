import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import {
  AccountCircle,
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
} from "@mui/icons-material";
import "./App.css"; // 自定义样式
import MyCarousel from "./components/MyCarousel";
import Display from "./components/Display";
import LowPrice from "./components/LowPrice";
import Bottom from "./components/Bottom";
import MostPopular from "./components/MostPopular";
import SecCarousel from "./components/SecCarousel";

function App() {
  const navigate = useNavigate();
  const [hoveredSeller, setHoveredSeller] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // 导航栏按钮点击处理函数
  const handleBuy = () => {
    navigate("/buy");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleSell = () => {
    navigate("/sell");
  };

  // 搜索框处理函数
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      // TODO: 实现搜索功能
      console.log("搜索:", event.target.value);
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
          <Box sx={{ flexGrow: 20, display: "flex", marginLeft: "20px" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="搜索商品..."
              onKeyPress={handleSearch}
              sx={{
                width: "900px", // 设置搜索框宽度
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

          {/* 导航栏右部按钮 */}
          <Button
            color="inherit"
            sx={{ marginRight: 2 }}
            startIcon={<ShoppingBag />}
            onClick={handleBuy}
          >
            购买
          </Button>

          <Button
            color="inherit"
            sx={{ marginRight: 2 }}
            startIcon={<ShoppingCart />}
            onClick={handleCart}
          >
            购物车
          </Button>

          <Button
            color="inherit"
            sx={{ marginRight: 2 }}
            startIcon={<Store />}
            onClick={handleSell}
          >
            出售
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

      {/* 二级导航栏 */}
      <SecCarousel />

      <Box sx={{ display: "flex", marginTop: "128px" }}>
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
