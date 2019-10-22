# $0 file 
# $1 c, m or d, create, merge & destroy
# $2 name, render as feature/name
# $3 commit text

if [ $1 == 'c' ];then
  git checkout master
  git pull
  git checkout -b feature/$2
  git push --set-upstream origin feature/$2
fi

if [ $1 == 'm' ];then
  FEATURE=`git branch -a|grep '.*\*'|sed s/'.*\/'//g`
  git add .
  STATUS=`git status -s`
  if [ -z "$STATUS" ]; then
    echo "已是最新内容,无需提交"
  else
    npm run commit
  fi
  
  STATUS=`git status -s` #提交完成后再次确认status
  if [ -z "$STATUS" ]; then
    git push
    git checkout $2
    git pull --rebase
    git rebase feature/$FEATURE
    git push
  else
    echo '存在尚未提交的更改,请检查git status,已终止合并' #退出合并脚本
  fi
fi

if [ $1 == 'd' ];then
  git checkout master
  git branch -d feature/$2
  git push origin --delete feature/$2
  git branch -a
fi
