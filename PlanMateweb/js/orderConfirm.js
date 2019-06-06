;(function ($) {
  let flag = true
  let text = [
    {
      workOrder: '1',
      product: 'aa-A',
      describe: '12',
      num: '22',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: '2',
      product: 'bb-A',
      describe: '34',
      num: '12',
      time: '2018/12/16',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    },
    {
      workOrder: 'WO18C0842M',
      product: 'PD6268665-A',
      describe: 'SMD-MC CCLED DEE CK -5',
      num: '1222',
      time: '2018/12/15',
      state: 'Confirmed'
    }
  ]
  let tb = $('<tbody></tbody>')

  $('.top')
    .find('.title')
    .find('p')
    .find('.min-span')
    .on('click', function () {
      if (!$('.Mynav').hasClass('min-nav')) {
        $('.Mynav').addClass('min-nav')
        $('.content').addClass('minContent')
      } else {
        $('.Mynav').removeClass('min-nav')
        $('.content').removeClass('minContent')
      }
    })
  $('.top')
    .find('.title')
    .find('p')
    .find('.max-span')
    .on('click', function () {
      $('.Mynav').removeClass('min-nav');
      if (!$('.Mynav').hasClass('max-nav')) {
        $('.Mynav').addClass('max-nav');
        $('.content').addClass('maxContent')
      } else {
        $('.Mynav').removeClass('max-nav');
        $('.content').removeClass('maxContent')
      }
    });
  $(document).ready(function () {
    // $('#dataTable').DataTable();
    $('#dataTable').dataTable({
      // lengthMenu: [5, 10, 20, 30],//这里也可以设置分页，但是不能设置具体内容，只能是一维或二维数组的方式，所以推荐下面language里面的写法。
      paging: true, // 分页
      ordering: true, // 是否启用排序
      searching: true, // 搜索
      language: {
        lengthMenu:
          '<select class="form-control input-xsmall">' +
          '<option value="1">1</option>' +
          '<option value="10">10</option>' +
          '<option value="20">20</option>' +
          '<option value="30">30</option>' +
          '<option value="40">40</option>' +
          '<option value="50">50</option>' +
            '</select><span style="margin-left: 4.5em;top: 6px;position: absolute;">条记录</span>', // 左上角的分页大小显示。
        search: '<span class="label label-success">搜索：</span>', // 右上角的搜索文本，可以写html标签

        paginate: {
          // 分页的样式内容。
          previous: '上一页',
          next: '下一页',
          first: '第一页',
          last: '最后'
        },

        zeroRecords: '没有内容', // table tbody内容为空时，tbody的内容。
        // 下面三者构成了总体的左下角的内容。
        info:
          '总共_PAGES_ 页，显示第_START_ 到第 _END_ ，筛选之后得到 _TOTAL_ 条，初始_MAX_ 条 ', // 左下角的信息显示，大写的词为关键字。
        infoEmpty: '0条记录', // 筛选为空时左下角的显示。
        infoFiltered: '' // 筛选之后的左下角筛选提示，
      },
      paging: true,
      pagingType: 'full_numbers' // 分页样式的类型
    });
    $('#table_local_filter input[type=search]').css({ width: 'auto' }) // 右上角的默认搜索文本框，不写这个就超出去了。
  });
  text.forEach(function (ele, index) {
    td =
      ' <tr role="row"><td>' +
      ele.workOrder +
      '</td>\
       <td>' +
      ele.product +
      '</td>\
       <td>' +
      ele.describe +
      '</td>\
       <td class="sorting_1">' +
      ele.num +
      '</td>\
       <td>' +
      ele.time +
      '</td>\
       <td>' +
      ele.state +
      '</td></tr>'
    $('#dataTable_wrapper')
      .find('tbody')
      .append(td)
  })
  $(window).resize(function () {
    if ($(window).width() >= 751) {
      if ($('.content').hasClass('minContent')) {
          $('.content').removeClass('minContent');
          $('.Mynav').removeClass('min-nav')
      }
    } else {
      if ($('.content').hasClass('maxContent')) {
          $('.content').removeClass('maxContent');
          $('.Mynav').removeClass('max-nav')
      }
    }
  })
})(jQuery);
