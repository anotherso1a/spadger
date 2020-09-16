sh scripts/bot.sh

npm run docs

git add README.md

DOC_TIME=$(date "+%Y-%m-%d %H:%M:%S")

STATUS=`git status --porcelain`

if [ "$STATUS" ]; then
  git commit -m "docs: automatic generate docs.\ngenerate time: $DOC_TIME"
  git push origin HEAD:master
fi
