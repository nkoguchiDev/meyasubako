FROM node:16.13.0-alpine AS builder

WORKDIR /app

COPY ./app /app

RUN yarn --frozen-lockfile && \
    yarn build

FROM nginx:1.20-alpine

COPY --from=builder /app/build /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]