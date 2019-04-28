(function ($) {
    let useSeting = {
        init() {
            //导航条
            this.nav = $('#navContent').find('li');
            //左边的导航条
            this.child = $(".navList").find('ul');
            //左边的导航条内容
            this.childNav =this.child.find('li');
            //网页内容
            this.inputGroup = $('.inputGroup');
            this.btn = $('.show');
            this.bind();
        },


        bind() {
            let self =this;
            this.childNav.each(function (index, ele) {
                $(ele).on('click', function () {
                    if($(ele)){}
                    $('.childActive').removeClass('childActive');
                    $(this).find('a').addClass('childActive');
                    $('.innerActive').removeClass('innerActive');
                    self.inputGroup.eq(index).addClass('innerActive')
                })

            });
            this.nav.each(function (index,ele) {
                $(ele).on('click',function () {
                    $('.active').removeClass('active');
                    $(this).find('a').addClass('active');
                    self.child.eq(index).css({display:'none'});
                    self.child.eq(index).css({display:'block'});
                })
            });
            this.btn.on('click',function () {
                $(this).toggleClass("open");
                if($(this).hasClass('open')){
                    $(this).addClass('showActive');
                    $('#bs-example-navbar-collapse-1').addClass('isopen');
                }else{
                    $(this).removeClass('showActive')
                }
            });
            // $('.isopen').find('ul').find('li').find('a').on('click',function () {
            //
            // })
        }
    };
    useSeting.init();
})(jQuery);
