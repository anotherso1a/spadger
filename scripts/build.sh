sh scripts/bot.sh

npm run build:pure

git add dist/

BUILD_TIME=$(date "+%Y-%m-%d %H:%M:%S")

git commit -m "build: automatic build\nbuild time: $BUILD_TIME"

git push origin master
