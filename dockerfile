# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有的话）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用代码到容器内
COPY . .

# 环境变量
ENV TARGET_URL=https://www.baidu.com

# 暴露容器的端口
EXPOSE 3000

# 启动 Node.js 应用
CMD ["node", "app.js"]
