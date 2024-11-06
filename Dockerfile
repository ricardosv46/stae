FROM node:16-alpine
RUN apk add --update --no-cache ca-certificates curl
COPY nginx/intermedio.crt /usr/local/share/ca-certificates/intermedio.crt
RUN update-ca-certificates
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/intermedio.crt npm start
