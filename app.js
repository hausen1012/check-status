// 引入必需的模块
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// 启用 CORS（允许所有来源，如有需要可指定 origin）
app.use(cors());

// 从环境变量获取网站 URL
const targetUrl = process.env.TARGET_URL;

if (!targetUrl) {
  console.error("TARGET_URL 环境变量未设置！");
  process.exit(1);
}

// 定义一个检查网站可用性的函数
async function checkWebsite() {
  try {
    const response = await axios.get(targetUrl);
    return response.status === 200; // 请求成功且返回状态码为 200
  } catch (error) {
    return false; // 请求失败
  }
}

// 定义一个 API 路由来访问该函数
app.get("*", async (req, res) => {
  const status = await checkWebsite();
  res.send(status); // 直接返回 true 或 false
});

// 启动服务
app.listen(port, () => {
  console.log(`API 服务运行在 http://localhost:${port}`);
});
