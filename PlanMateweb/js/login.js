(function ($) {
    var obj = {
        init: function () {
            this.User = $('#exampleInputUser');
            this.passWorld = $('#exampleInputPassword1');
            this.animad = $('#animad');
            this.renden();
            this.bindEvent();
            this.check();
        },
        renden: function () {
            $.ajax({
                url: 'http://localhost:8080/Factory/data.json',
                type: 'GET',
                success: function (res) {
                    $('.title').eq(0).text(res.Title);
                    $('#exampleInputUser').attr('placeholder', res.UserName);
                    $('#exampleInputPassword1').attr('placeholder', res.PassWorld);
                    $('#loginTitle').text(res.loginTitle);
                },
                error: function () {
                    console.log('error')
                }
            });

        },
        bindEvent: function () {
            this.User.on('input', function () {
                var val = $(this).val();
                if (val.length > 6) {
                    $(this).addClass('danger');
                    alert('不要输入六位以上');
                    $(this).val(null);
                } else {
                    $(this).removeClass('danger');
                }
            });
            this.passWorld.on('input', function () {
                var val = $(this).val();
                if (val.length > 6) {
                    alert('不要输入六位以上');
                    $(this).val(null);
                } else { }
            });
        },
        check: function () {
            var self = this;
            $(this.animad).click(function () {
                if ($(self.animad).is(':checked')) {
                    $('#loginTitle').text('管理员登陆');
                }else{
                    $('#loginTitle').text('用户登陆');
                }
            })
        }
    }
    obj.init();
})(jQuery)