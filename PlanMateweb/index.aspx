<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="PlanMateweb.index" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="../Image/favicon.ico">
    <title>PlanMateAPS-登陆</title>
    <link href="Css/bootstrap.css" rel="stylesheet" />
    <link href="Css/login.css" rel="stylesheet" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/index.js"></script>
</head>

<body>
    <form id="loginform" runat="server">
        <div class="wrapper">
            <div class="container">
                <div class="row cont">
                    <div class="col-lg-6 col-md-6 col-sm-0 col-xs-0 Logo">
                        <img src="Image/logo-white.png" alt="">
                        <h4 class='title'>您身边更专业的计划专家</h4>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                        <p id='loginTitle' runat="server" class="text-center">用户登陆啊啊啊</p>
                         
                        <div class="form-group ml-md-2 ml-sm-2 ml-xl-2 mr-lg-2 mr-md-2 mr-sm-2 mr-xl-2">
                            <asp:TextBox ID="userName" runat="server" CssClass="form-control mb-2" placeholder ="用户名"></asp:TextBox>
                            <asp:TextBox ID="userPass" runat="server" CssClass="form-control mb-3" TextMode="Password" placeholder ="用户密码"></asp:TextBox>
                            
                        <div class="row ">
                        <div runat="server" id="nowarp" visible="false" class="col-7 m-auto">
                                <asp:Button ID="BtnLogout" runat="server" CssClass="btn btn-primary btn-block" Text="强制登出" OnClick="BtnLogout_Click" />
                            </div>
                            <div runat="server" id="nowarp1" visible="false" class="col-5 m-auto">
                                <asp:Button ID="BtnCancel" runat="server" CssClass="btn btn-secondary btn-block" Text="取消" OnClick="BtnCancel_Click" />
                            </div>
                            <div runat="server" id="warp" class="col-12" >
                                <asp:Button ID="BtnLogin" runat="server" CssClass="btn btn-primary  btn-block" text="登陆" OnClick="BtnLogin_Click"/>
                            </div>
                        </div>

                        </div>
                        <div  class ="row" style="position:relative">  
                            <div class="ml-4">
                                <input ID="usercheck" runat="server"  type="checkbox" onchange="ChangeLoginTitle()" style="margin-bottom: 2em;"/>
                                <label for="#usercheck" style="word-break: keep-all;white-space: nowrap;font-size: .5em;">管理员登陆</label>             
                            </div>
                                         
                            <div id="LoginMsg" runat="server"  class="col-7 text-danger" style="right:.2em; position:absolute;font-size:.5em;font-weight:500">
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
