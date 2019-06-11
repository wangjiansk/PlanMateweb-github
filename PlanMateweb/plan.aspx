<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="plan.aspx.cs" Inherits="PlanMateweb.orderConfirm" %>

<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>当前计划</title>
    <link href="Css/bootstrap.css" rel="stylesheet" />
    <link href="Css/dataTables.css" rel="stylesheet" />
    <link href="font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link href="Css/plan.css" rel="stylesheet" />
</head>
<body>
<div class="wrapper">
    <div class="top container-fluid">
        <div class="title">
            <p>
                数据中心-PlanMateAps
                <span class="min-span"><i class="fa fa-bars" aria-hidden="true"></i></span>
                <span class="max-span"><i class="fa fa-bars" aria-hidden="true"></i></span>
            </p>
        </div>
            <div class="user">
                <div class="nav-item">
                    <a href="#" id="user">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </a>
                    <ul class="userSeting">
                        <li><a class="seting-item" href="#">用户设置</a></li>
                        <li><a class="seting-item" href="#">登陆记录</a></li>
                        <li><a class="seting-item" href="#" data-toggle="modal" data-target="#myModal">退出</a></li>
                    </ul>
                </div>

            </div>
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- 模态框头部 -->
                    <div class="modal-header">
                        <h4 class="modal-title">确定要退出吗？</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- 模态框主体 -->
                    <div class="modal-body">
                        退出后要重新登陆
                    </div>

                    <!-- 模态框底部 -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">退出登陆</button>
                    </div>

                </div>
            </div>
        </div>
        </div>

    <div class="container-fluid main">
        <div class="row con">
            <div class="Mynav">
                <ul>
                    <li class="nav-link"><a href="#"><img src="../Image/logo-white.png" id="logo" /></a></li>
                    <li class="nav-link active"><a href="#">
                        <i class="fa fa-tachometer" aria-hidden="true"></i><span> 订单查询</span>
                    </a></li>
                    <li class="nav-link">
                        <a href="#">
                            <i class="fa fa-table" aria-hidden="true"></i><span> 当前计划</span></a></li>
                    <li class="nav-link">
                        <a href="#">
                            <i class="fa fa-folder" aria-hidden="true" style=""></i>
                            <span>历史数据</span>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                        <ul class="navChild">
                            <li><a href="#" class="innerActive">生产计划与实际查询</a></li>
                            <li><a href="#">生产效率分析</a></li>
                            <li><a href="#">品质分析</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card text-white bg-primary mb-3" style="height: 110px;">
                            <div class="card-header">提前交货订单：26张</div>
                            <div class="card-body">
                                <p class="card-title">查看详情</p>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card text-white bg-success mb-3" style="height: 110px;">
                            <div class="card-header">正常交货订单：123张</div>
                            <div class="card-body">
                                <p class="card-title">查看详情</p>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card text-white bg-warning mb-3" style="height: 110px;">
                            <div class="card-header">延迟交货订单：15张</div>
                            <div class="card-body">
                                <p class="card-title">查看详情</p>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="card text-white bg-danger mb-3" style="height: 110px;">
                            <div class="card-header">未排程订单：2张</div>
                            <div class="card-body">
                                <p class="card-title">查看详情</p>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-header">
                    <i class="fa fa-table" aria-hidden="true"></i>
                    客户订单详情
                </div>
                <div class="card-body" style='z-index: 10;'>
                    <div class="table-responsive" style='z-index: 10;'>
                        <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4" style='z-index: 10;'>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-bordered dataTable" id="dataTable" width="100%"
                                           cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                           style="width: 100%;">
                                        <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                                colspan="1" aria-label="工单: activate to sort column ascending"
                                                style="width: 87px;">工单
                                            </th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                                colspan="1" aria-label="产品: activate to sort column ascending"
                                                style="width: 69px;">产品
                                            </th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                                colspan="1" aria-label="描述: activate to sort column ascending"
                                                style="width: 79px;">描述
                                            </th>
                                            <th class="sorting_asc" tabindex="0" aria-controls="dataTable"
                                                rowspan="1" colspan="1"
                                                aria-label="数量: activate to sort column descending"
                                                style="width: 17px;" aria-sort="ascending">数量
                                            </th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                                colspan="1" aria-label="需求日期: activate to sort column ascending"
                                                style="width: 64px;">需求日期
                                            </th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1"
                                                colspan="1" aria-label="工单状态: activate to sort column ascending"
                                                style="width: 57px;">工单状态
                                            </th>
                                        </tr>
                                        </thead>
                                        <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">工单</th>
                                            <th rowspan="1" colspan="1">产品</th>
                                            <th rowspan="1" colspan="1">描述</th>
                                            <th rowspan="1" colspan="1">数量</th>
                                            <th rowspan="1" colspan="1">需求日期</th>
                                            <th rowspan="1" colspan="1">工单状态</th>
                                        </tr>
                                        </tfoot>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer small text-muted">更新时间：2018年12月17日 8:51:08 更新部门：PMC1</div>
            </div>
        </div>
    </div>
</div>
    <script src="js/jquery-3.4.1.js"></script>
    <script src="js/jquery.dataTables.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/plan.js"></script>
</body>
</html>