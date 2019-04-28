$(document).ready(function () {
    $('#example').dataTable({
        "scrollY": 200,
        "scrollX": true
    });
    $('.divh2 h2').eq(0).fadeIn().animate({
        display: 'block',
        left: '50%',
        marginLeft: '-129.025px'
    }, 1500);
    $('.content').eq(0)
        .fadeTo("slow", 0)
        .fadeTo("slow", 0.15)
        .fadeTo("slow", 0.4)
        .fadeTo('slow', 0.8)
        .fadeTo("slow", 1);
});
(function ($) {
    var curIndex;
    var str = {}
    var paseTime;
    function bindEvent() {
        console.log('时间绑定成功');
        $('#start')//开始生产按钮
            .add('#pase')//暂停按钮
            .add('#end')//工单完结按钮
            .add('#errorText')//异常按钮
            .add('#startSwitch')//开始切换按钮
            .add('#Postponed')//延后补报按钮
            .add('#endEvent')//事件结束按钮
            .add('#change')//换班按钮
            .on('click', function () {
                if ($(this).attr('id') == 'pase') {
                    $('.activ .endTime').eq(0).text(getTime());
                    if (curIndex !== undefined) {
                        console.log(1212)
                        if (localStorage.getItem('paseTime') !== null) {
                            str = JSON.parse(localStorage.getItem('paseTime'));
                        }
                        str[curIndex] = getTime();
                        localStorage.setItem('paseTime', JSON.stringify(str));
                    }
                    $('.activ .status').eq(0).text('生产暂停')
                } else if ($(this).attr('id') == 'start') {
                    $('.activ .startTime').eq(0).text(getTime());
                    if ($('.activ .status').eq(0).text() !== '生产暂停') {
                        $('.activ .startPlan').eq(0).text(getTime());
                    }
                    $('.activ .endTime').eq(0).text('null')
                    $('.activ .status').eq(0).text('生产中');
                } else if ($(this).attr('id') == 'end') {
                    $('.activ .endTime').eq(0).text(getTime());
                    $('.activ .status').eq(0).text('工单完结').css({
                        color: 'green',
                        fontWeight: 'bolder'
                    });
                    $('.activ .endPlan').eq(0).text(getTime());
                } else if ($(this).attr('id') == 'errorText') {
                    $('.activ .status').eq(0).text('异常').css({
                        color: 'red'
                    });
                } else if ($(this).attr('id') == 'startSwitch') {
                    $('.activ .startSwitchTime').eq(0).text(getTime());
                }
                else if ($(this).attr('id') == 'Postponed') {
                    alert('延后补报')
                } else if ($(this).attr('id') == 'endEvent') {
                    alert('事件结束')
                } else if ($(this).attr('id') == 'change') {
                    alert('换班')
                }

            })

        $('#tb td').on('click', function () {
            if ($(this).parent().hasClass('activ')) {
                $(this).parent().removeClass('activ')
            } else {
                $('.activ').removeClass('activ')
                $(this).parent().addClass('activ');
            }
            curIndex = $(this).parent().index();
        })
    }
    function getTime(yea) {
        var date = new Date();
        var day = date.getDate();
        var Month = date.getMonth() + 1;
        var Hours = (date.getHours()) < 10 ? '0' + date.getHours() : date.getHours();
        var Minutes = (date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes()
        var year = date.getFullYear();
        var timeStr = Month + '/' + day + '/' + Hours + ':' + Minutes;
        var yeaStr = year + '/' + Month + '/' + day + '/' + Hours + ':' + Minutes;
        return yea ? yeaStr : timeStr;
    }
    function renderHT() {
        var obj =[]
        var paseTime = localStorage.getItem('paseTime');
        paseTime = JSON.parse(paseTime);
        for(var key in paseTime){
            obj.push(paseTime[key])
        }
       obj.forEach(function(en,index){
           console.log(index)
       })
        $('#tb').append($('<tr>\
        <td>S119030701</td>\
        <td>0001</td>\
        <td>W001</td>\
        <td>1000</td>\
        <td class="startPlan">null</td>\
        <td class="endPlan">null0</td>\
        <td class="startSwitchTime">null</td>\
        <td class="startTime">null</td>\
        <td class="endTime">12121212</td>\
        <td>null</td>\
        <td class="status">null</td></tr>\
        <tr>\
        <td>yeshuiyuan</td>\
        <td>叶水源</td>\
        <td>null</td>\
        <td>null</td>\
        <td class="startPlan">null</td>\
        <td class="endPlan">null</td>\
        <td class="startSwitchTime">null</td>\
        <td class="startTime">null</td>\
        <td class="endTime">null</td>\
        <td>null</td>\
        <td class="status">null</td></tr>\
        <tr>\
        <td>S119030701</td>\
        <td>0001</td>\
        <td>W001</td>\
        <td>1000</td>\
        <td class="startPlan">3/7 8:00</td>\
        <td class="endPlan">3/7 10:00</td>\
        <td class="startSwitchTime">3/7 8:10</td>\
        <td class="startTime">3/7 8:25</td>\
        <td class="endTime">12121212</td>\
        <td>null</td>\
        <td class="status">null</td></tr>\
        <tr>\
        <td>yeshuiyuan</td>\
        <td>叶水源</td>\
        <td>null</td>\
        <td>null</td>\
        <td class="startPlan">null</td>\
        <td class="endPlan">null</td>\
        <td class="startSwitchTime">null</td>\
        <td class="startTime">null</td>\
        <td class="endTime">null</td>\
        <td>null</td>\
        <td class="status">null</td></tr>\
        '));
        $('#example_filter label').text('搜索');
        $('.nowTime').text('当前时间:' + getTime(true))
    }
    renderHT();
    bindEvent();
})(jQuery)