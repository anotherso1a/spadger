sh scripts/bot.sh $1

npm run docs

git add README.md

DOC_TIME=$(date "+%Y-%m-%d %H:%M:%S")

STATUS=`git status --porcelain`

if [ "$STATUS" ]; then
  git pull
  git commit -m "docs: automatic generate docs. \r\n generate time: $DOC_TIME"
  git push origin HEAD:master
fi
