import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  LocalGasStation,
  Build,
  Agriculture,
  Science,
  Category,
  Stars,
} from "@mui/icons-material";
import "../App.css"; // 自定义样式

export default function SecCarousel() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  const categoryMenuItems = {
    能源: ["原油", "天然气", "煤炭", "其他"],
    金属: ["贵金属", "工业金属", "黑色金属"],
    农产品: ["谷物", "油籽", "软商品", "畜产品"],
    化工: ["化工原料", "化肥"],
    其他: ["橡胶", "木材", "纸浆"],
    特殊商品: ["稀土", "稀有金属"],
  };

  return (
    <div>
      {/* 二级导航栏 */}
      <AppBar position="fixed" sx={{ top: 64, backgroundColor: "#2d262c" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "#FFD700", marginRight: 2 }}>
            产品类目
          </Typography>
          {[
            { text: "能源", icon: <LocalGasStation /> },
            { text: "金属", icon: <Build /> },
            { text: "农产品", icon: <Agriculture /> },
            { text: "化工", icon: <Science /> },
            { text: "其他", icon: <Category /> },
            { text: "特殊商品", icon: <Stars /> },
          ].map((item) => (
            <div key={item.text}>
              <Button
                color="inherit"
                onClick={(e) => handleClick(e, item.text)}
                sx={{
                  color: "white",
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "8px 12px",
                  "&:hover": {
                    color: "#FFD700",
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                  },
                }}
              >
                {item.icon}
                <Typography variant="caption" sx={{ mt: 0.5 }}>
                  {item.text}
                </Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedCategory === item.text}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "#2d262c",
                  },
                }}
              >
                {categoryMenuItems[item.text]?.map((subItem) => (
                  <MenuItem
                    key={subItem}
                    onClick={handleClose}
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#FFD700",
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                      },
                    }}
                  >
                    {subItem}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
