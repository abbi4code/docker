FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm isntall
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD [ "node" , "dist/index.js" ]