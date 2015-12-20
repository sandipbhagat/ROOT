<!-- Nav -->
<%
 String username = null;
Cookie[] cookies = request.getCookies();
if(cookies !=null){
for(Cookie cookie : cookies){
    if(cookie.getName().equals("user")) username = cookie.getValue();
}
}
%>

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
		<li><a href="#/tendersdisqualified">Disqualified</a></li>
		<li  class="current"><a href="#/analysis">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%} else { %>
				<li ><a href="#/loginpanel">Login</a></li>			
		<%} %>
	</ul>
</nav>
<%if(username != null && username !="") {%>
<!-- Banner -->

<!-- Main -->
<div id="main-wrapper" ng-controller="analysisCtrl" >
	<div id="main" class="container">
		<div class="row 200%">
			<div class="12u">

				<section class="box highlight">
					<header>
						<h2>Analysis</h2>
					</header>

				<div id="container" style="min-width: 210px; height: 400px; margin: 0 auto"></div>
				
				<br>
				
				<div id="container1" style="min-width: 210px; height: 400px; margin: 0 auto"></div>
				
				<br>
				
				<div id="container2" style="min-width: 210px; height: 400px; margin: 0 auto"></div>
				<br>
				
				<div id="container3" style="min-width: 210px; height: 400px; margin: 0 auto"></div>
				
				<br>
				
				<div id="container4" style="min-width: 210px; height: 400px; margin: 0 auto"></div>
				
			</section>

			</div>
		</div>
	</div>
</div>

<%} else { %>
	<jsp:include page="loginpanel.jsp" />
	<%} %>
