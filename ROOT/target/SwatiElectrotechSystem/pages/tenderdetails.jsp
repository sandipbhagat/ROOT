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
	<div class="leftNav">Swati Electrotech</div>
	<ul class="rightNav">
		<li><a href="#/">Home</a></li>
		<%if(username != null && username !="") {%>
		<li><a href="#/employeepanel">Dashboard</a></li>
		<li class="current"><a href="#/newtenders">New Tenders</a></li>
		<li><a href="#/tendersinprocess">Tenders In Process</a></li>
		<li><a href="#/worksinprocess">Works In Process</a></li>
		<li><a href="#/workscompleted">Works Completed</a></li>
		<li><a href="#">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%} else { %>
		<li><a href="#/loginpanel">Login</a></li>
		<%} %>
	</ul>
</nav>
<%if(username != null && username !="") {%>
<!-- Banner -->

<!-- Main -->
<div id="main-wrapper" ng-controller="tenderDetailsCtrl">
	<div id="main" class="container">
		<div class="row 200%">
			<div class="12u">

				<section class="box highlight">
					<header>
						<h2>Tenders</h2>
					</header>

					<h3>
						<font color="#ff3333">Tender Details</font>
					</h3>

					<a href='#/updatetender' class='Button' tabindex='0'>Edit this
						Tender !</a>
					<table style="text-align: center;">
						<tr>
							<td>Tender Id</td>
							<td>{{selectedTender.id}}</td>
						</tr>
						<tr>
							<td>Customer</td>
							<td>{{selectedTender.nameOfCustomer}}</td>
						</tr>
						<tr>
							<td>Scope of Work</td>
							<td>{{selectedTender.scopeOfWork}}</td>
						</tr>
						<tr>
							<td>Estimated value</td>
							<td>{{selectedTender.estimatedValue}}</td>
						</tr>
						<tr>
							<td>Due Date</td>
							<td>{{selectedTender.dueDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>EMD</td>
							<td>{{selectedTender.emd}}</td>
						</tr>
						<tr>
							<td>Interested</td>
							<td>{{selectedTender.interested}}</td>
						</tr>
						<tr>
							<td>Status Of Tender</td>
							<td>{{selectedTender.statusOfTender}}</td>
						</tr>
						<tr>
							<td>System Entered Date</td>
							<td>{{selectedTender.systemEnteredDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Tender Submitted</td>
							<td>{{selectedTender.tenderSubmitted}}</td>
						</tr>
						<tr>
							<td>Tender Submitted Date</td>
							<td>{{selectedTender.submittedDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Technical Bid Opened</td>
							<td>{{selectedTender.technicalBidOpened}}</td>
						</tr>
						<tr>
							<td>Technical Bid Opened</td>
							<td>{{selectedTender.technicalBidOpened}}</td>
						</tr>
						<tr>
							<td>Technical Bid Opening Date</td>
							<td>{{selectedTender.technicalBidOpeningDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Technically Qualified</td>
							<td>{{selectedTender.technicallyQualified}}</td>
						</tr>
						<tr>
							<td>Price Bid Opened</td>
							<td>{{selectedTender.priceBidOpened}}</td>
						</tr>
						<tr>
							<td>Price Bid Opening Date</td>
							<td>{{selectedTender.priceBidOpeningDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Lowest Bidder</td>
							<td>{{selectedTender.lowestBidder}}</td>
						</tr>
					</table>
			</div>
		</div>
	</div>
</div>

<%} else { %>
<jsp:include page="loginpanel.jsp" />
<%} %>