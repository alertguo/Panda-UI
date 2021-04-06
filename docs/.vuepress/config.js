module.exports = {
  base: '/Panda-UI/',
  title: '熊猫 UI',
  description: '一个好用的 UI ',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
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
