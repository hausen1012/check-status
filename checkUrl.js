// checkUrl.js
function canAccessUrl(url) {
  return fetch(url, { method: "GET", mode: "no-cors" })
    .then((response) => {
      // 如果状态码是 200 则表示可以访问
      return response.ok;
    })
    .catch(() => {
      // 如果发生错误，表示无法访问
      return false;
    });
}

// 从环境变量读取 URL（如果没有提供则默认测试百度）
const urlToTest = process.env.URL_TO_TEST || "http://www.baidu.com";

canAccessUrl(urlToTest).then((result) => {
  console.log(`Can access ${urlToTest}:`, result);
});
