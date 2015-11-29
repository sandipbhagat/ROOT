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
		<li><a href="#">Analysis</a></li>
		<li><a href="logout">Logout</a></li>
		<%} else { %>
				<li ><a href="#/loginpanel">Login</a></li>			
		<%} %>
	</ul>
</nav>
<%if(username != null && username !="") {%>
<!-- Banner -->

<!-- Main -->
<div id="main-wrapper" ng-controller="workDetailsCtrl">
	<div id="main" class="container">
		<div class="row 200%">
			<div class="12u">

				<section class="box highlight">
					<header>
						<h2>Tenders</h2>
					</header>

					<h3>
						<font color="#ff3333">Work Details</font>
					</h3>
					
					<a href='#/addnewwork' class='Button' tabindex='0'>Edit this Work!</a>
					
					<table style="text-align: center;">
						<tr>
							<td>Tender Id</td>
							<td>{{selectedWork.tenderId}}</td>
						</tr>
						<tr>
							<td>Work Id</td>
							<td>{{selectedWork.id}}</td>
						</tr>
						<tr>
							<td>Name of Customer</td>
							<td>{{selectedWork.nameOfCustomer}}</td>
						</tr>
						<tr>
							<td>Scope Of Work</td>
							<td>{{selectedWork.scopeOfWork}}</td>
						</tr>
						<tr>
							<td>Work Order Status</td>
							<td>{{selectedWork.workOrderStatus}}</td>
						</tr>
						<tr>
							<td>Work Order Number</td>
							<td>{{selectedWork.workOrderNumber}}</td>
						</tr>
						<tr>
							<td>Work Order Date</td>
							<td>{{selectedWork.workOrderDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Value Of Work</td>
							<td>{{selectedWork.valueOfWork}}</td>
						</tr>
						<tr>
							<td>Formalities Completed</td>
							<td>{{selectedWork.formalitiesCompleted}}</td>
						</tr>
						<tr>
							<td>Security Deposit BG Amount</td>
							<td>{{selectedWork.securityDepositBGAmount}}</td>
						</tr>
						<tr>
							<td>Security Deposit BG Date</td>
							<td>{{selectedWork.securityDepositBGDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Validity Of Security Deposit BG</td>
							<td>{{selectedWork.validityOfSecurityDepositBG | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Date Of Work Completion As Per Work Order</td>
							<td>{{selectedWork.dateOfWorkCompletionAsPerWorkOrder | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Date Of Inspection</td>
							<td>{{selectedWork.dateOfInspection | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Date Of Material Delivery</td>
							<td>{{selectedWork.dateOfMaterialDelivery | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Date Of Work Completion</td>
							<td>{{selectedWork.dateOfWorkCompletion | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Project Completed In Time</td>
							<td>{{selectedWork.projectCompletedInTime}}</td>
						</tr>
						<tr>
							<td>Expenses Made As On Date</td>
							<td>{{selectedWork.expensesMadeAsOnDate | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Invoice Number</td>
							<td>{{selectedWork.invoiceNumber}}</td>
						</tr>
						<tr>
							<td>Date Of Invoice</td>
							<td>{{selectedWork.dateOfInvoice | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Date Of Receipt Of Payment</td>
							<td>{{selectedWork.dateOfReceiptOfPayment | date:'yyyy-MM-dd'}}</td>
						</tr>
						<tr>
							<td>Work Completed In All Respect</td>
							<td>{{selectedWork.workCompletedInAllRespect}}</td>
						</tr>
					</table>
					
				</section>

			</div>
		</div>
	</div>
</div>

<%} else { %>
	<jsp:include page="loginpanel.jsp" />
	<%} %>