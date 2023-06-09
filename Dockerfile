FROM node:18-slim

WORKDIR /app
COPY . /app
RUN npm install

# expose port 3000
EXPOSE 3000
CMD npm run start
