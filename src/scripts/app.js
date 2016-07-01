// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

// 引入views
require('./views/guide.js');
require('./views/detail.js');
require('./views/search.js');
require('./views/my.js');
require('./views/home.js');
require('./views/index.js');

// SPA设置
SPA.config({
  indexView: 'guide'
});
