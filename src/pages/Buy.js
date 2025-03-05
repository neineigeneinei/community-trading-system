import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Grid, Paper } from "@mui/material";

// 从Sell组件导入类目数据
const categoryMenuItems = {
  能源: ["原油", "天然气", "煤炭", "其他"],
  金属: ["贵金属", "工业金属", "黑色金属"],
  农产品: ["谷物", "油籽", "软商品", "畜产品"],
  化工: ["化工原料", "化肥"],
  其他: ["橡胶", "木材", "纸浆"],
  特殊商品: ["稀土", "稀有金属"],
};

const Buy = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 从URL中获取类目参数
  const searchParams = new URLSearchParams(location.search);
  const mainCategory = searchParams.get("mainCategory");
  const subCategory = searchParams.get("subCategory");

  useEffect(() => {
    // 模拟从API获取商品数据
    const mockProducts = Array.from({ length: 20 }).map((_, index) => {
      // 先随机选择一个主类目
      const mainCat =
        Object.keys(categoryMenuItems)[
          Math.floor(Math.random() * Object.keys(categoryMenuItems).length)
        ];
      // 从选定的主类目中随机选择一个子类目
      const subCat =
        categoryMenuItems[mainCat][
          Math.floor(Math.random() * categoryMenuItems[mainCat].length)
        ];

      return {
        id: index + 1,
        name: `商品${index + 1}`,
        price: (Math.random() * 0.09 + 0.01).toFixed(3),
        mainCategory: mainCat,
        subCategory: subCat,
        image: `/images/product${(index % 8) + 1}.jpg`,
        sales: Math.floor(Math.random() * 1000),
      };
    });
    setProducts(mockProducts);
  }, []);

  useEffect(() => {
    // 根据类目参数筛选商品
    if (mainCategory) {
      const filtered = products.filter(
        (product) =>
          product.mainCategory === mainCategory &&
          (!subCategory || product.subCategory === subCategory)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, mainCategory, subCategory]);

  return (
    <Box
      sx={{
        padding: "20px 104px 0 104px",
        backgroundColor: "#211a21",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFD700",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {mainCategory
          ? `${mainCategory}${subCategory ? ` - ${subCategory}` : ""}`
          : "所有商品"}
      </Typography>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "#2d262c",
                color: "white",
                textAlign: "center",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(255,215,0,0.2)",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  marginBottom: 2,
                  overflow: "hidden",
                  borderRadius: 1,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "#FFD700", marginBottom: 1 }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#888", marginBottom: 1 }}
              >
                类目: {product.mainCategory} - {product.subCategory}
              </Typography>
              <Typography variant="body1" sx={{ color: "#FFD700" }}>
                {product.price} ETH
              </Typography>
              <Typography variant="body2" sx={{ color: "#888", marginTop: 1 }}>
                销量: {product.sales} 件
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Buy;
