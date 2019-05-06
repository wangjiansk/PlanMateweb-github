let useSet = {
        init() {
            this.btn = $('#dropBtn');
            this.dropSpan = $('.triangle_border_down');
            this.nav = $('.navbar-nav').find('li').find('a').not(".child-nav");
            this.navList = $('.navList');
            this.dropdList = $('.dropdList');
            this.childNav = $('.child-nav');
            this.content = $('.content');
            this.con =  $('.conten');
            this.bindEvent();
        },
        bindEvent() {
            const self = this;
            this.nav.each(function (index) {
                $(this).on('click', function () {
                    $('.active').removeClass('active');
                    $(this).parent().addClass('active');
                    //大屏幕的时候
                    if (self.dropSpan.css('display') === 'none') {
                        self.con.hide();
                        self.con.eq(0).show();
                        $('.listActive').removeClass('listActive');
                        self.navList.eq(index).addClass('listActive');
                        self.content.css({display: 'none'});
                        self.content.eq(index).show();
                        self.dropdList.eq(index).removeClass('inner');
                        $('.childActive').removeClass('childActive');
                        self.navList.eq(index).find('li').find('a').eq(0).addClass('childActive');
                    } else {
                        //小屏幕的時候
                        $('.inner').removeClass('inner');
                        $('.listActive').removeClass('listActive');
                        self.dropdList.eq(index).toggleClass('inner');
                        self.content.css({display: 'none'});
                        self.content.eq(index).show();
                        $('.innerActive').removeClass('innerActive');
                        self.childNav.parent().parent().eq(index).find('li').find('a').eq(0).addClass('innerActive');
                        self.navList.eq(index).addClass('listActive').find('ul').find('li').eq(0).find('a').addClass('childActive');
                    }

                })
            });
            //右边的导航栏
            this.childNav.each(function (index, ele) {
                $(ele).on('click', function () {
                    $('.innerActive').removeClass('innerActive');
                    $(this).addClass('innerActive');
                    self.con.hide();
                    self.con.eq(index).show();
                    $('.childActive').removeClass('childActive');
                    self.navList.find('ul').find('li').find('a').eq(index).addClass('childActive');
                })
            });
            //左边的导航栏
            this.navList.find('ul').find('li').find('a').each(function (index, ele) {
                $(ele).on('click', function () {
                    $(".childActive").removeClass("childActive");
                    $(this).addClass("childActive");
                    self.con.hide();
                    self.con.eq(index).show();
                    $('.innerActive').removeClass('innerActive');
                    self.childNav.eq(index).addClass('innerActive');
                })
            })

        }
    };
useSet.init();