# server

air-cnc server

## Install Dev Dependencies

yarn add -D prettier
yarn add -D babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier

## Mac/Linux users need to edit this file '{$HOME}/.zshrc' file

- alias lint-nodejs="exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/arifpro/linting/master/nodejs-eslint-prettier.sh 2> /dev/null)"

## config eslintrc

- lint-nodejs
