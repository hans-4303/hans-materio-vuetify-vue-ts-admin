# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## vite + vue 셋팅하기

1. yarn create vite
2. cd 프로젝트 이름
3. yarn
4. yarn add 패키지 이름 | 패키지 이름 --dev
5. git init

## eslint 셋팅하기

1. yarn add eslint --dev
2. yarn create @eslint/config
3. yarn run eslint "실행할 파일"

## prettier 셋팅하기

1. yarn add --dev --exact prettier
2. node --eval "fs.writeFileSync('.prettierrc.json','{}\n', 'utf-8')": 'utf-8' 형식으로 생성해야 JSON 에러 해결 가능
3. yarn prettier . --write
4. .eslintrc.cjs 접근, extends에 'prettier' 추가
