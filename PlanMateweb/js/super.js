;(function ($) {
  var navBtn = $('#nav-btn')
  var showNav = $('.showNav')[0]
  var decodedString
  function render () {
    console.log(1212)
    var user = sessionStorage.getItem('User')
    var passwrold = sessionStorage.getItem('userPass')
    if (passwrold !== null) {
      decodedString = $.decode(passwrold)
      
    }
console.log(decodedString)
  
    if (document.referrer !== '') {
      if (typeof user === 'string') {
        $('#userName').text(user)
        $('#userName').attr('href', 'javascript:void(0)')
      }
    }
  }
  // 绑定事件函数
  function bindEvent (dom) {
    var str = '<span class="glyphicon glyphicon-remove"></span>'
    var spanStr =
      '<span class="icon-bar"></span>\
              <span class="icon-bar"></span>\
              <span class="icon-bar"></span>'
    var isClick = true
    dom.on('click', function () {
      if (isClick) {
        isClick = false
        navBtn.empty().css({
          height: '34px',
          width: '44px'
        })
        if (
          $(showNav)
            .find('ul li')
            .hasClass('active') == false
        ) {
          $(navBtn).append(str)
          $(this).css({
            background: '#ccc'
          })
          $(showNav)
            .animate({ width: '10em' }, 500, 'swing', function () {
              $(this)
                .find('.hidemsg')
                .fadeIn('slow')
            })
            .find('.iconshow')
            .hide()
            .end()
            .find('ul li')
            .addClass('active')
          setTimeout(function () {
            isClick = true
          }, 500)
        } else {
          $(navBtn)
            .append(spanStr)
            .css({
              height: '34px'
            })
          $(showNav)
            .find('.hidemsg')
            .hide()
          $(this).css({
            background: '#fff'
          })
          $(showNav)
            .animate({ width: '20px' }, 500, 'swing')
            .find('.iconshow')
            .show()
            .end()
            .find('ul li')
            .removeClass('active')
          setTimeout(function () {
            isClick = true
          }, 500)
        }
      }
    })
  }
  // 调用函数
  bindEvent(navBtn)
  render()
})(jQuery)
