FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

## EXPOSE <port used in vite.config.ts>

EXPOSE 5173

CMD ["npm", "run", "dev"]