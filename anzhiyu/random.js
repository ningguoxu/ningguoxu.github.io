var posts=["2021/08/07/Hexo搭建安之鱼主题配置/","2024/08/09/AI生成优质思维导图/","2024/08/07/免费的GPT4！/","2024/08/09/我的图床方案/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };