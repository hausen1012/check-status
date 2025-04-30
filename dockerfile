# 使用官方 Node.js 镜像作为基础镜像
FROM node:16

# 设置工作目录
WORKDIR /usr/src/app

# 复制当前目录的所有文件到容器内
COPY . .

# 安装依赖（如果有 package.json，建议将依赖安装在这里）
# RUN npm install

# 默认运行 `checkUrl.js`
CMD ["node", "checkUrl.js"]
