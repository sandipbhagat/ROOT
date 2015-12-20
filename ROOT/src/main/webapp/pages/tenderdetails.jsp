<!-- Nav -->
<%
	String username = null;
	Cookie[] cookies = request.getCookies();
	if (cookies != null) {
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals("user"))
				username = cookie.getValue();
		}
	}
%>

<nav id="nav">
	<div class="leftNav">My Swati</div>
	<ul class="rightNav">
		<li><a href="#/">Home</a></li>
		<%
			if (username != null && username != "") {
		%>
		<li><a href="#/employeepanel">Dashboard</a></li>
		<li><a href="#/newtenders">New Tenders</a></li>
		<li><a href="#/tendersinprocess">Tenders In Process</a></li>
		<li><a href="#/worksinprocess">Works In Process</a></li>
		<li><a href="#/workscompleted">Works Completed</a></li>
		<li><a href="#/tendersdisqualified">Disqualified</a></li>
		<li><a href="#/analysis">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%
			} else {
		%>
		<li><a href="#/loginpanel">Login</a></li>
		<%
			}
		%>
	</ul>
</nav>
<%
	if (username != null && username != "") {
%>
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

					<div id="tableContainer-1">
						<div id="tableContainer-2">
							<table id="myTable" border>
								<caption>
									<b>Table at a Glance</b>
								</caption>
								<tr height="30">
									<td width="40%">Name of Customer</td>
									<td width="60%">{{selectedTender.nameOfCustomer}}</td>
								</tr>
								<tr height="30">
									<td>Address of Customer</td>
									<td>{{selectedTender.addressOfCustomer}}</td>
								</tr>
								<tr height="30">
									<td>Name of contact Person</td>
									<td>{{selectedTender.nameOfContactPerson}}</td>
								</tr>
								<tr height="30">
									<td>No. of Contact Person</td>
									<td>{{selectedTender.numberOfContactPerson}}</td>
								</tr>
								<tr height="30">
									<td>Tender Number</td>
									<td>{{selectedTender.tenderNumber}}</td>
								</tr>
								<tr height="30">
									<td>Pre Qualification Criteria</td>
									<td>{{selectedTender.preQualificationCriteria}}</td>
								</tr>
								<tr height="30">
									<td>Pre Bid Meeting Date</td>
									<td>{{selectedTender.preBidOpeningDate |
										date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Due Date</td>
									<td>{{selectedTender.dueDate | date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Tender Fee</td>
									<td>{{selectedTender.tenderFee}}</td>
								</tr>
								<tr height="30">
									<td>Tender Purchase Due Date</td>
									<td>{{selectedTender.tenderPurchaseDueDate |
										date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>EMD Amount</td>
									<td>{{selectedTender.emd}}</td>
								</tr>
								<tr height="30">
									<td>BG is Acceptable or not</td>
									<td>{{selectedTender.bgIsAcceptableOrNot}}</td>
								</tr>
								<tr height="30">
									<td>Estimated value</td>
									<td>{{selectedTender.estimatedValue}}</td>
								</tr>
								<tr height="30">
									<td>Tender Submission(Online / Manual)</td>
									<td>{{selectedTender.tenderSubmission}}</td>
								</tr>
								<tr height="30">
									<td>Payment Terms</td>
									<td>{{selectedTender.paymentTerms}}</td>
								</tr>
								<tr height="30">
									<td>Offer Validity</td>
									<td>{{selectedTender.offerValidity | date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Guarantee Period</td>
									<td>{{selectedTender.guaranteePeriod}}</td>
								</tr>
								<tr height="30">
									<td>Delivery Period</td>
									<td>{{selectedTender.deliveryPeriod}}</td>
								</tr>
								<tr height="30">
									<td>Performance Guarantee</td>
									<td>{{selectedTender.performanceGuarantee}}</td>
								</tr>
								<tr height="30">
									<td>Special Terms And Conditions</td>
									<td>{{selectedTender.specialTermsAndCond}}</td>
								</tr>
								<tr height="30">
									<td>Special Documents To Attach</td>
									<td>{{selectedTender.specialDocsToAttach}}</td>
								</tr>
								<tr height="30">
									<td>Scope of Work</td>
									<td>{{selectedTender.scopeOfWork}}</td>
								</tr>
								<tr height="30">
									<td>Sheet Prepared By</td>
									<td>{{selectedTender.sheetPreparedBy}}</td>
								</tr>

							</table>
						</div>
					</div>
					<br> <br>
					<div id="tableContainer-1">
						<div id="tableContainer-2">
							<table id="myTable" border>
								<caption>
									<b>Other tender details</b>
								</caption>
								<tr height="30">
									<td width="40%">Tender Id</td>
									<td width="60%">{{selectedTender.id}}</td>
								</tr>
								<tr height="30">
									<td>Interested</td>
									<td>{{selectedTender.interested}}</td>
								</tr>
								<tr height="30">
									<td>Status Of Tender</td>
									<td>{{selectedTender.statusOfTender}}</td>
								</tr>
								<tr height="30">
									<td>System Entered Date</td>
									<td>{{selectedTender.systemEnteredDate |
										date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Tender Submitted</td>
									<td>{{selectedTender.tenderSubmitted}}</td>
								</tr>
								<tr height="30">
									<td>Tender Submitted Date</td>
									<td>{{selectedTender.submittedDate | date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Technical Bid Opened</td>
									<td>{{selectedTender.technicalBidOpened}}</td>
								</tr>
								<tr height="30">
									<td>Technical Bid Opened</td>
									<td>{{selectedTender.technicalBidOpened}}</td>
								</tr>
								<tr height="30">
									<td>Technical Bid Opening Date</td>
									<td>{{selectedTender.technicalBidOpeningDate |
										date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Technically Qualified</td>
									<td>{{selectedTender.technicallyQualified}}</td>
								</tr>
								<tr height="30">
									<td>Price Bid Opened</td>
									<td>{{selectedTender.priceBidOpened}}</td>
								</tr>
								<tr height="30">
									<td>Price Bid Opening Date</td>
									<td>{{selectedTender.priceBidOpeningDate |
										date:'yyyy-MM-dd'}}</td>
								</tr>
								<tr height="30">
									<td>Lowest Bidder</td>
									<td>{{selectedTender.lowestBidder}}</td>
								</tr>

							</table>
						</div>
					</div>
			</div>
		</div>
	</div>
</div>

<%
	} else {
%>
<jsp:include page="loginpanel.jsp" />
<%} %>