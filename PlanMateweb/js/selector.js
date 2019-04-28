(function ($) {
    $.fn.extend({
        Advertisement(options) {
            this.wrap = this;
            console.log(this.wrap)
            this.wrap.text(options)
        }
    });
    var selector = {
        init() {
            this.btn = $(".userBtn");
            this.bindEvent();
            this.Advertisement = ['适应多行业生产排程需求，根据客户需求设计解决方案，为大型企业和中小企业提供不同投资成本的方案。', '按照设备产能和物料自动排程，产生准确的交货和生产计划，准确评估产能和交期，避免给出不能实现的承诺，提早作出资源准备。', '准确的长期生产计划，降低库存水平减少欠料，总装与零部件分厂协同计划，降低半品库存，按库存约束排程减少紧急切换。', '多种自动优化方式，提高设备利用率，降低生产成本，平衡交期与生产效率，在保证按时交货的基础上降低成本。'];
            $('.BottomContent').text(this.Advertisement[0])
        },
        bindEvent() {
            this.btn.on('mousedown', function () {
                console.log(123)
                $(this).css({transform: "scale(.9,.9)"});
                $(document).on('mouseup', () => {
                    $(this).css({transform: "scale(1,1)"});
                })
            })
            this.btn.each((index, ele) => {
                $(ele).hover(() => {
                   $('.BottomContent').Advertisement(this.Advertisement[index]);

                },()=>{$('.BottomContent').Advertisement(this.Advertisement[0]);})
            })
        }
    }
    selector.init();
})(jQuery)

function divlink(linkname) {
    if (linkname == "planboard") {
        window.location.href = "/1.aspx";
    }
    else if (linkname == "datacenter") {
        window.location.href = "/2.aspx";
    }
    else if (linkname == "systemsetting") {
        window.location.href = "/userset.aspx";
    }
    else if (linkname == "reportsystem") {
        window.location.href = "/4.aspx";
    }
    else {
        alert("link name error , please check your link name.")
    }

}