module.exports = {
  // GitHub 的 base
  base: '/Panda-UI/',
  // Gitee 的 base
  // base: '/panda-ui-website/',
  title: '熊猫 UI',
  description: '一个好用的 UI ',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/alertguo/Panda-UI' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ],
      },
      {
        title: '组件',
        children: [
          '/components/button',
        ],
      }
    ],
  }
}
