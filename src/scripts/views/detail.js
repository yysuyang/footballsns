var tplDetail = require('../templates/detail.string');

SPA.defineView('detail', {
  html: tplDetail,

  plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.imgsrc = "";
      vm.title = "";
      vm.detail = "";
      vm.isShowLoading = true;
    }
  }],

  bindActions: {
    'back': function () {
      this.hide();
    }
  },

  bindEvents: {
    'show': function () {
      var vm = this.getVM();
      var d = this.param.data;
      console.log(d);

      $.ajax({
        url: '/api/getLiveDetail.php',
        data: {
          id: d.id
        },
        success: function (rs) {
          setTimeout(function () {
            vm.title = rs.data.title;
            vm.imgsrc = rs.data.imgsrc;
            vm.detail = rs.data.detail;
            vm.isShowLoading = false;
          }, 3000);
        }
      })
    }
  }
});
