const chalk = require('chalk');
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim();

// process.exit(1) //测试用
const commitRE = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?: .{1,50}/;
const mergeRE = /^Merge branch feature\/.+/;
const pullRE = /Merge branch 'master'.+/;
if (!commitRE.test(msg) && !mergeRE.test(msg) && !pullRE.test(msg)) {
  console.log(
    `${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.white(`请使用 ${chalk.cyan(`npm run commit`)} 进行代码提交.\n\n`) +
      chalk.white(
        `分支合并时请使用 ${chalk.cyan(
          `npm run mfb <feature_name>`
        )} 来将feature分支合并至主分支(dev/release/release-prd/master)上.\n\n`
      ) +
      chalk.white(`请不要将除了master以外的主分支用来合并至其他分支.`)
  );
  process.exit(1);
}
