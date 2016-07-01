var tplSearch = require('../templates/search.string');

SPA.defineView('search', {
  html: tplSearch,

  bindEvents: {
    'show': function () {
      var fixScroll = this.widgets.fixScroll;
      fixScroll.on('scroll', function () {
        if(this.y <= -200) {
          if($('.m-search').siblings().length > 0){
            ;
          } else {
            $('.m-search').after($('.m-search-menu').clone(true).addClass('fixed'));
          }
        } else {
          $('.m-search-menu.fixed').remove();
        }
      });
    }
  }
});
