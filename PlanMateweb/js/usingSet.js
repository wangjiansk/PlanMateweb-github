;(function ($) {
    let text = {
        init:function() {
            this.bindEvent()
            this.clientW = $(window).height()
            this.render();
            console.log(this)
        },
        bindEvent:function() {
            let nav = $('.nav').find('li')

let flag = true;
            nav.each(function(index, ele) {
                let self = this
                $(ele).on('click', function () {
                    if(flag){
                        flag = false;
                        let inpContainer = $('.MainContent').find('.inpGroup').find('.inpContainer')
                        $('.active').removeClass('active')
                        $(this)
                            .find('a')
                            .addClass('active')
                        $('.innerActive')
                            .removeClass('innerActive')
                            .slideUp('slow')
                        inpContainer
                            .eq(index)
                            .slideDown('slow')
                            .addClass('innerActive');
                        setTimeout(function() {
                            flag = true;
                        }, 500);
                    }

                })
            });
            $('.navbar-header').find('.show').on('click', function () {
                if(flag){
                    flag = false;
                    if (!$(this).hasClass('showActive')) {
                        $(this).addClass('showActive').parent().prev().css({display: 'block'});
                        setTimeout(function(){flag = true;},500)
                    }
                    else {
                        $(this).removeClass('showActive').prev().css({display: 'none'});
                        setTimeout(function(){flag = true;},500)
                    }
                }


            })
        },
        render:function() {
            let inpGroup = $('.inpGroup');
            inpGroup.css({
                backgroundImage: 'url(../Image/bg.jpg)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                opacity: '.8'
            });
            $('.inpGroup').inpGroup({
                title: '员工新建',
                label: ['名字', '密码','邮箱','电话'],
                inputg: ['text', 'password','email','tel'],
                inputId: ['name', 'password','email','phone'],
                btnName: '确认新建',
                btnClass: 'btn-success'
            }).inpGroup({
                title: '员工修改',
                label: ['名字', '密码','是否登陆'],
                inputg: ['text', 'password','checkbox'],
                inputId: ['o', 'p','r'],
                btnName: '确认修改',
                btnClass: 'btn-primary'
            }).inpGroup({
                title: '员工删除',
                label: ['名字', '密码'],
                inputg: ['text', 'passworld'],
                inputId: ['a', 'b'],
                btnName: '确认删除',
                btnClass: 'btn-danger'
            }).inpGroup({
                title: '用户组新建',
                label: ['名字', '密码'],
                inputg: ['text', 'passworld'],
                inputId: ['c', 'd'],
                btnName: '确认新建',
                btnClass: 'btn-success'
            }).inpGroup({
                title: '用户组修改',
                label: ['名字', '密码'],
                inputg: ['text', 'passworld'],
                inputId: ['e', 'f'],
                btnName: '确认删除',
                btnClass: 'btn-primary'
            }).inpGroup({
                title: '用户组删除',
                label: ['名字', '密码'],
                inputg: ['text', 'passworld'],
                inputId: ['g', 'h'],
                btnName: '确认删除',
                btnClass: 'btn-danger'
            }).inpGroup({
                title: '用户权限设置',
                label: ['名字', '密码'],
                inputg: ['text', 'passworld'],
                inputId: ['i', 'j'],
                btnName: '设置',
                btnClass: 'btn-primary'
            });
            $('.inpGroup').find('.inpContainer').eq(0).addClass('innerActive').css({
                display:'block'
            })
        }
    }
    text.init()
})(jQuery)
