#! /bin/bash

rm -rf .git
ember build -e staging
cp ./web.config ./dist
cp -r ./bin ./dist/bin
cd ./dist
git init
git config user.email "interactive@bamideas.com"
git config user.name "BaM Interactive"
git remote add azure "https://baminteractive:$STAGING_PASS@manifold-site-staging.scm.azurewebsites.net:443/manifold-site-staging.git" || true
git checkout -b deploy
git add -A
git commit -am "Deployment $(date +%s)"
git push --force azure deploy:master
