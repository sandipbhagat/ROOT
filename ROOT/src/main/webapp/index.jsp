<!DOCTYPE HTML>
<!--
	TXT by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html data-ng-app="swatielectrotech" >
	<head>
		<title>My Swati</title>
		<meta charset="utf-8" />
		<meta name="description" content="" />
		<meta name="keyword" content=""/>
		<link rel="canonical" href="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="" />
		<meta property="og:description"  content="" />
		<meta property="og:url" content="" />
		<meta property="og:site_name" content="" />
		
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/style.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		

		<!-- Slick Grid Dependencies -->
		  <link rel="stylesheet" href="assets/css/smoothness/jquery-ui-1.8.16.custom.css" type="text/css"/>
		  <link rel="stylesheet" href="assets/slick.grid.css" type="text/css"/>
		  <link rel="stylesheet" href="assets/controls/slick.pager.css" type="text/css"/>
		  <link rel="stylesheet" href="assets/css/examples.css" type="text/css"/>
		  <link rel="stylesheet" href="assets/controls/slick.columnpicker.css" type="text/css"/>
	      <link data-require="bootstrap-css@3.2.0" data-semver="3.2.0" rel="stylesheet" href="assets/css/bootstrap.min.css" />	
	</head>
	<body class="homepage" background="images/bg.jpg">
<%
 String username = null;
Cookie[] cookies = request.getCookies();
if(cookies !=null){
for(Cookie cookie : cookies){
    if(cookie.getName().equals("user")) username = cookie.getValue();
}
}
%>
		<div id="page-wrapper">
		<!-- <div ng-include='"header.html"'></div>	 -->
	<!-- Header -->
		    <header id="header">
					<!-- <div class="logo container"> -->
						<div>
						<a href="#/" id="logo"></a>
						</div>
					<!-- </div> -->
				</header>
<nav id="nav">
<div class="leftNav">My Swati</div>
	<ul class="rightNav">
		<li><a href="#/">Home</a></li>
	<%if(username != null && username !="") {%>
		<li><a href="#/employeepanel">Dashboard</a></li>
		<li><a href="#/newtenders">New Tenders</a></li>
		<li><a href="#/tendersinprocess">Tenders In Process</a></li>
		<li><a href="#/worksinprocess">Works In Process</a></li>
		<li><a href="#/workscompleted">Works Completed</a></li>
		<li><a href="#">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%} else { %>
				<li ><a href="#/loginpanel">Login</a></li>			
		<%} %>
	</ul>
</nav>
			<div data-ng-view></div>
	
			<!-- <div ng-include='"footer.html"'></div> -->

			<!-- Footer -->
				<footer id="footer" class="container">

					<!-- Copyright -->
						<div id="copyright">
							<ul class="menu">
								<li>&copy; My Swati. All rights reserved</li><li>Design & Development: <a href="http://groei.in">Groei.in</a></li>
							</ul>
						</div>

				</footer>

			</div>

		<!-- Scripts -->
	<script src="assets/js/angular.js"></script>
	<!-- <script src="assets/js/angular.min.js"></script> -->
    <script src="assets/js/angular-route.min.js"></script>
    <script src="assets/js/angular-sanitize.min.js"></script>
        <script src="assets/js/angular-cookies.js"></script>
            <script src="assets/js/jquery.min.js"></script>
<!-- 		<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script> -->
            <script src="assets/js/jquery.dropotron.min.js"></script>
		
			<script src="assets/js/bootstrap.min.js"></script>
			
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/skel-viewport.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/alasql.min.js"></script>
			<script src="assets/js/xlsx.core.min.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
			<!-- <script src="assets/js/slidder.js"></script> -->
			
			<script src="assets/js/ngDialog.js"></script>
			
			 <script src="assets/js/slippry.min.js"></script>
			 
		<!-- Slick Grid Dependencies -->	 
		<script src="assets/lib/firebugx.js"></script>

		<script src="assets/lib/jquery-1.7.min.js"></script>
		<script src="assets/lib/jquery-ui-1.8.16.custom.min.js"></script>
		<script src="assets/lib/jquery.event.drag-2.2.js"></script>
		
		<script src="assets/slick.core.js"></script>
		<script src="assets/slick.formatters.js"></script>
		<script src="assets/slick.editors.js"></script>
		<script src="assets/plugins/slick.cellrangedecorator.js"></script>
		<script src="assets/plugins/slick.cellrangeselector.js"></script>
		<script src="assets/plugins/slick.cellselectionmodel.js"></script>
		<script src="assets/slick.dataview.js"></script>
		<script src="assets/slick.grid.js"></script>
		<script src="assets/controls/slick.pager.js"></script>
		<script src="assets/controls/slick.columnpicker.js"></script>	 
			 
	<script data-require="ui-bootstrap@0.11.0" data-semver="0.11.0" src="assets/js/ui-bootstrap-tpls-0.11.0.min.js"></script>
    <script data-require="lodash.js@3.10.0" data-semver="3.10.0" src="assets/js/lodash.js"></script>

	</body>
</html>