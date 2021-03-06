#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:alertguo/Panda-UI.git master:gh-pages

 # 发布到 gitee
 # 每次使用这个上传需将 config.js 中的 base 改为 /panda-ui-website/
#   git push -f git@gitee.com:alertguo/panda-ui-website.git master

cd -
