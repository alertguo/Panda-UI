# 熊猫 UI - 一个 Vue UI 组件

[![Build Status](https://travis-ci.com/alertguo/Panda-UI.svg?branch=main)](https://travis-ci.com/alertguo/Panda-UI)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用
1.安装
    
使用本框架前，请在 CSS 中开启 border-box
    
```
*,*::before,*::after{box-sizing: border-box}
```

IE 8 及以上浏览器都支持此样式

2.安装 panda

```
yarn add --dev panda-ui-vue2
```

或

```
npm install --dev panda-ui-vue2
```
3.引入 panda
```js
import {Button} from 'panda-ui-vue2'
import 'panda-ui-vue2/dist/index.css'

export default {
  name: '#app',
  components: {
    'g-button':Button
  }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
