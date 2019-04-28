(function ($) {
    let group = {
        init:function(options) {
            this.wrap = options.wrapper;
            this.label = options.label;
            this.inputg = options.inputg;
            this.title = options.title;
            this.btn = options.btnName;
            this.inputId= options.inputId;
            this.btnClass = options.btnClass;
            this.render();
            return this;
        },
        render:function(){
            let str = '';
            let self = this
            this.inputg.forEach(function(ele,index){
               str+=' <span> <label for="#'+self.inputId[index]+'" >'+self.label[index]+':</label>\n' +
                   '                        <input type="'+self.inputg[index]+'" placeholder="'+self.inputId[index]+'" id="'+ self.inputId[index]+'"></span>\n';
            })
        let dom = '<div class="inpContainer" style="display:none">\n' +
            '                <h4 style="text-align: center;">'+self.title+'</h4>\n' +
            '                <p style="display:block;" class="text-center">\n' +
            str +
            '            <button class="btn '+self.btnClass+'" id="register" style="display:block;margin: 1em auto;">'+self.btn+'</button>\n' +
            '                </div>'

          self.wrap.append(dom);
        if($('.inpGroup .inpContainer p span input[type!=checkbox]')){
            $('.inpGroup .inpContainer p span input[type=checkbox]').prev().css('display','inline-block')
            $('.inpGroup .inpContainer p span').css('textAlign','left')
        }
            return this;
        }
    }
    $.fn.extend({
        inpGroup:function(options) {
            options.wrapper = this;
            group.init(options);
            return this;
        }
    })
})(jQuery)