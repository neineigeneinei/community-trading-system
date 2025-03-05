import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { Search, ShoppingBag, ShoppingCart, Store } from "@mui/icons-material";
import SecCarousel from "./SecCarousel";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");

  // 连接MetaMask钱包
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log("钱包连接成功:", accounts[0]);

        window.ethereum.on("accountsChanged", (newAccounts) => {
          if (newAccounts.length === 0) {
            setAccount("");
            console.log("钱包已断开连接");
          } else {
            setAccount(newAccounts[0]);
            console.log("账户已切换:", newAccounts[0]);
          }
        });
      } catch (error) {
        console.error("连接钱包失败:", error.message);
        setAccount("");
      }
    } else {
      console.error("请安装MetaMask!");
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  const handleBuy = () => {
    navigate("/buy");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleSell = () => {
    navigate("/sell");
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("搜索:", event.target.value);
    }
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#FFD700" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
            <img
              src="/logo2.png"
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            链宗
          </Typography>

          <Box sx={{ flexGrow: 20, display: "flex", marginLeft: "20px" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="搜索商品..."
              onKeyPress={handleSearch}
              sx={{
                width: "900px",
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

          <Button
            variant="contained"
            onClick={connectWallet}
            sx={{
              backgroundColor: account ? "#4CAF50" : "#211a21",
              color: "white",
              "&:hover": {
                backgroundColor: account ? "#45a049" : "#2d262c",
              },
            }}
          >
            {account
              ? `${account.slice(0, 6)}...${account.slice(-4)}`
              : "连接钱包"}
          </Button>
        </Toolbar>
      </AppBar>

      <SecCarousel />
      
      <Box sx={{ marginTop: "128px" }}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;