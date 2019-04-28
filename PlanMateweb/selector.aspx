<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="selector.aspx.cs" Inherits="PlanMateweb.selector" %>

<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PlanMateAPS-功能选择</title>
    <link rel="stylesheet" href="css/selector.css">
    <link href="https://cdn.bootcss.com/font-awesome/5.8.1/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/font-awesome/5.8.1/js/all.min.js"></script>
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <div class="TopContent">
                <img src="Image/logo.png" height="100" />
            </div>
            <div class="titleContent">PlanMateAPS您身边更专业的计划专家</div>
            <div class="MainContent">
                <div runat="server" id="systemsetting" class="userBtn" onclick="divlink('systemsetting')"><span class="fas fa-cog"></span><span>系统管理</span></div>
                <div runat="server" id="reportsystem" class="userBtn" onclick="divlink('reportsystem')"><span class="fas fa-tachometer-alt"></span><span>报工系统</span></div>
                <div runat="server" id="datacenter" class="userBtn" onclick="divlink('datacenter')"><span class="fas fa-chart-bar"></span><span>数据中心</span></div>
                <div runat="server" id="planboard" class="userBtn" onclick="divlink('planboard')"><span class="fa fa-desktop"></span><span>计划看板</span></div>
            </div>

            <div class="BottomContent"></div>
        </div>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/selector.js"></script>
</body>
</html>
