(function ($) {
    $.fn.extend({
        start() {
            this.wrap = this;
            this.screenH = null;
            this.screenW = null;
            console.log(this.wrap)
            $(window).on('resize', () => {
                this.wrap.html("");
                this.init();
            }).on('load', () => {
                this.init()
            });
            this.init = function () {
                this.screenH = $(window).height();
                this.screenW = $(window).width();
                this.wrap.css({
                    width: this.screenW,
                    height: this.screenH
                });
                for (var i = 0; i < 150; i++) {
                    let span = $('<span></span>');
                    this.wrap.append(span)

                    var x = parseInt(Math.random() * this.screenW);
                    var y = parseInt(Math.random() * this.screenH);
                    span.css({
                        left: x - 100 + 'px',
                        top: y - 100 + 'px',
                        zIndex: "0"
                    })
                    var scale = Math.random() * 1.5;
                    span.css({
                        transform: 'scale(' + scale + ', ' + scale + ')'
                    })
                    var rate = Math.random() * 1.5;
                    span.css({
                        animationDelay: rate + 's'
                    })
                }
            }
        },
        slide(options) {
            this.screenH = $(window).height();
            this.screenW = $(window).width();
            this.wrap = this;
            this.imgText = options.img;
            this.curIndex = 0;
            this.lock = true;
            this.timer = null;
            console.log(this.imgText)
            $(window).on('resize', () => {
                this.screenH = $(window).height();
                this.screenW = $(window).width();
                this.wrap.find('ul').css({
                    width: this.screenW * 6
                }).find('li').css({
                    width: this.screenW,
                    textAlign:'center'
                });
            }).on('load', () => {
                this.screenH = $(window).height();
                this.screenW = $(window).width();
                let ulStr = $('<ul></ul>')
                let str = '';
                this.imgText.forEach(function (ele, index) {
                    str += '<li class="img"><a href="#">' + ele + '</a><button>点击</button></li>'
                })
                str += '<li class="img"><a href="#">' + this.imgText[0] + '</a><button>点击</button></li>'
                this.wrap.append(ulStr.append(str))
                this.wrap.find('ul').css({
                    width: this.screenW * 6
                }).find('li').css({
                    width: this.screenW
                });
                this.move = function () {
                    if (this.lock) {
                        this.lock = false;
                        if (this.curIndex == this.imgText.length) {
                            this.wrap.find('ul').animate({
                                left: -(this.curIndex * this.screenW),
                                // opacity:'0'
                            }, 2000, () => {
                                this.wrap.find('ul').css({left: 0})
                                this.curIndex = 0;
                                // this.lock = true;
                            })
                        } else {
                            this.wrap.find('ul').animate({
                                left: -(this.curIndex * this.screenW),
                                // opacity:'0'
                            }, 2000, () => {
                                // this.lock = true;
                            })
                        }
                    }
                }

            });
            this.timer = setInterval(() => {
                this.curIndex++;
                this.move();
                this.lock=true;
            }, 6000)
        }
    })
})(jQuery)