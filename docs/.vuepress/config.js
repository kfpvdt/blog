// docs/.vuepress/config.js
module.exports = {
    title: "寒山之桐",
    description: "这是ambon写字的地方",
    there:'reco',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
      sidebar: [
        {
          title: '左当风谷',
          children: ['/左当风谷/左当风谷' ],
          initialOpenGroupIndex: 1 // 可选的, 默认值是 0
        }
      ]
    },
  };