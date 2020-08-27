BRANCH=`git branch -a|grep '.*\*'|sed 's/[*[:space:]]*//g'`
STATUS=`git status --porcelain`

if [ "$STATUS" ]; then
  echo "please claer your working-tree first!\n"
  exit 1
fi

if [ $BRANCH != "master" ]; then
  echo "please run release on master branch!\n"
  exit 1
fi

npm version patch -m '[release](patch): @%s'
