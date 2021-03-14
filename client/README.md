# client

air-cnc client

## Install Dev Dependencies

yarn add -D prettier babel-eslint eslint-config-react-app
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier

## Mac/Linux users need to edit this file '{$HOME}/.zshrc' file

- alias lint-reactjs="exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/arifpro/linting/master/reactjs-eslint-prettier.sh 2> /dev/null)"

## config eslintrc

- lint-reactjs
