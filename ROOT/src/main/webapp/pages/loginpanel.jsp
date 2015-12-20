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
		<li><a href="#/analysis">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%} else { %>
				<li class="current"><a href="#/loginpanel">Login</a></li>			
		<%} %>
	</ul>
</nav>

<!-- Banner -->

<!-- Main -->
<div id="main-wrapper">
	<div id="main" class="container">
		<div class="row 200%">
			<div class="12u">

				<section class="box highlight">
					<header>
						<h2>Login Panel</h2>
					</header>
					
				<%if(username != null && username !="") {%>
							
				<%} else { %>					
					<form role="form" action="login" method="POST">
						<label for="username">User Name:<font color="red">*</font></label> 
						<input type="text" name="username" class="form-control" id="username" required="required"
							placeholder="User Name"> <label> </label> 
						<label for="password">Password:<font color="red">*</font></label> 
						<input type="password" name="password" class="form-control" id="password" required="required"
							placeholder="Password"> <font color="red">*
							Mandatory</font> <label> </label>
						<button type="submit" class="btn btn-primary">Login</button>
					</form>	
				<%} %>

				</section>

			</div>
		</div>
	</div>
</div>
