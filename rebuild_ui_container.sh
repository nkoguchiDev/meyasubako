#!/bin/sh

# 現在のコンテナ状態をチェック
docker-compose ps

# コンテナを削除
docker-compose rm -fsv ui

# ちゃんと指定したコンテナがなくなっているか確認
docker-compose ps -a

# 個別のコンテナを作り直し
docker-compose build --no-cache ui

# 動作確認
docker-compose up -d
