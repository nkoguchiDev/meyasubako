#!/bin/sh

echo HASHED_SECRET_KEY=password >.env

cp .env ./backend

docker-compose up -d
