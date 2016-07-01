var sa = require('../lib/swiper.animate1.0.2.min.js');
var tplMy = require('../templates/my.string');

SPA.defineView('my', {
  html: tplMy,

  plugins: ['delegated'],

  // styles: {
  //   background: 'transparent !important'
  // },

  bindActions: {
    'close': function () {
      this.hide();
    }
  },

  bindEvents: {
    show: function () {
      var lifenavScroll = this.widgets['lifenav-scroll'];
      lifenavScroll.options.scrollX = true;
      lifenavScroll.options.scrollY = false;

      console.log(sa.animate);
    }
  }

});
