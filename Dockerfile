FROM node:20-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
EXPOSE 5000
CMD ["npm", "start"]
