(function ($) {
    let useSeting = {
        init() {
            this.nav = $('#bs-example-navbar-collapse-1').find('li').find('a').not(".child-nav");
            this.navList = $('.navList').find('ul');
            this.navListNav =  this.navList.find('li').find('a');
            this.btn = $('.show');
            this.con = $('.inputGroup');
            this.childrenNav = $('.childrenNav').find('li').find('a');
            this.caret = $('.caret');
            this.bindEvent();
        },
        bindEvent(){
            let self = this;
            this.nav.each(function (index,ele) {
                $(ele).on('click',function () {
                    //小屏幕的时候
                   if(self.caret.css('display')=='none'){
                       $('.active').removeClass('active');
                       $(this).addClass('active');
                       self.navList.css({display: 'none'});
                       self.navList.eq(index).css({display: 'block'})
                   }
                    // 大屏幕的时候
                    else{
                       $('.active').removeClass('active');
                       $(this).addClass('active');
                       $(this).parent().find('.childrenNav').toggleClass('showChildNav')
                   }

                })
            });
            this.navListNav.each(function (index,ele) {
                $(ele).on('click',function () {
                    $('.childActive').removeClass('childActive');
                    $(this).addClass('childActive');
                    $('.innerActive').removeClass('innerActive');
                    self.con.eq(index).addClass('innerActive');
                })
            });
            this.childrenNav.each(function (index,ele) {
                $(ele).on('click',function () {
                    $('.childrenActive').removeClass('childrenActive');
                    $(this).addClass('childrenActive');
                    $('.innerActive').removeClass('innerActive');
                    self.con.eq(index).addClass('innerActive');
                })
            });
            this.btn.on('click',function () {
                $(this).toggleClass('showActive');//判断按钮开启
            })
        }
    };
    useSeting.init();
})(jQuery);
