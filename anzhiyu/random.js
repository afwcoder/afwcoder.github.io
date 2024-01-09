var posts=["2024/01/09/hello-world/","2024/01/09/链表刷题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };