sh scripts/bot.sh

npm run docs

git add README.md

DOC_TIME=$(date "+%Y-%m-%d %H:%M:%S")

git commit -m "docs: automatic generate docs.\ngenerate time: $DOC_TIME"

git push
