<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="userset.aspx.cs" Inherits="PlanMateweb.userset" %>


<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>用户设置</title>
    <link rel="stylesheet" href="Css/bootstrap3.3.7.css">
    <link rel="stylesheet" href="Css/useSet.css">
    <link href="Css/font-awesome.css" rel="stylesheet" />

</head>
<body>
<div class="wrapper">
    <nav class="navbar navbar-default mynav">
        <div class="container-fluid" style="height: 100%;">
            <div class="navbar-header">
                <button type="button" class="show" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                    <i></i>
                    <i></i>
                    <i></i>
                </button>
                <img src="../Image/logo-white.png" class="nav-img" height="50"/>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav" id="navContent">
                    <li><a class="active ">用户设置 <span class="caret"></span></a>
                        <ul class="childrenNav">
                            <li><a href="#" class="childActive">用户管理</a></li>
                            <li><a href="#">用户组管理</a></li>
                            <li><a href="#">用户权限管理</a></li>
                        </ul>
                    </li>
                    <li><a>看板设置</a></li>
                    <li><a>员工删除</a></li>
                    <li><a>MES设置</a></li>
                    <li><a>日志</a></li>
                    <li><a>数据中心设置</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="navList">
        <ul>
            <li><a href="#" class="childActive">用户管理</a></li>
            <li><a href="#">用户组管理</a></li>
            <li><a href="#">用户权限管理</a></li>
        </ul>

    </div>
    <div class="inputGroup innerActive" >
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户新建</h4></div>
            <div class="groupMain" >
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-success">确定新建</button>
                </p>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户修改</h4></div>
            <div class="groupMain">
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-primary">确定修改</button>
                </p>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户删除</h4></div>
            <div class="groupMain">
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-danger">确定删除</button>
                </p>
            </div>
        </div>
    </div>
    <div class="inputGroup">
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户组新建</h4></div>
            <div class="groupMain" >
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-success">确定新建</button>
                </p>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户组修改</h4></div>
            <div class="groupMain">
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-primary">确定修改</button>
                </p>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>用户组删除</h4></div>
            <div class="groupMain">
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-danger">确定删除</button>
                </p>
            </div>
        </div>
    </div>
    <div class="inputGroup">
        <div class="col-lg-3 col-md-3 col-sm-3 con">
            <div class="groupHeader"><h4>权限管理</h4></div>
            <div class="groupMain" >
                <p><i class="glyphicon glyphicon-user"></i><input type="text" placeholder="名字"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="password" placeholder="密码"></p>
                <p><i class="glyphicon glyphicon-user"></i><input type="tel" placeholder="电话"></p>
                <p>
                    <button class="btn btn-success">提交</button>
                </p>
            </div>
        </div>
    </div>
</div>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap3.3.7.js"></script>
<script src="js/usingSet.js"></script>
</body>
</html>