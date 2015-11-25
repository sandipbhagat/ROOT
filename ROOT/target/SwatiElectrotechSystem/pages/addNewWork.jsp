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
		<li><a href="#/newtenders">New Tenders</a></li>
		<li><a href="#/tendersinprocess">Tenders In Process</a></li>
		<li class="current"><a href="#/worksinprocess">Works In Process</a></li>
		<li><a href="#/workscompleted">Works Completed</a></li>
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
					<header> </header>
					<h3>
						<font color="#428bca">Add New Work</font>
					</h3>
					<form role="form"><!--  action="http://localhost:8080/SwatiElectrotechSystem/work/update" method="POST"> -->

						<label for="id">Work Id<font color="red">*</font></label>
						<input type="text" name="id" class="form-control" id="id" value={{selectedWork.id}}
						ng-model=selectedWork.id
							placeholder="Work Id" readonly="readonly" > <label> </label>
							 
							<label for="tenderId">Tender Id<font color="red">*</font></label>
						<input type="text" name="tenderId" class="form-control" id="tenderId" value={{selectedWork.tenderId}}
						ng-model=selectedWork.tenderId
							placeholder="Tender Id" readonly="readonly" > <label> </label> 
							
						<label for="name">Name of Customer</label>
						<input type="text" name="nameofcustomer" class="form-control"
							id="nameofcustomer" value={{selectedWork.nameOfCustomer}}
							ng-model=selectedWork.nameOfCustomer
							placeholder="Name of customer"> <label> </label> 
							
							
						<label for="scopeofwork">Scope of Work</label>
						<textarea name="scopeOfWork" class="form-control"
							id="scopeOfWork" ng-model=selectedWork.scopeOfWork 
							placeholder="Scope Of Work">{{selectedWork.scopeOfWork}}</textarea>
						<label> </label>
						
						 <label for="workOrderStatus">Work Order Status	</label>
						<textarea name="workOrderStatus" class="form-control" rows="6"
							id="workOrderStatus" ng-model=selectedWork.workOrderStatus
							placeholder="Work Order Status">{{selectedWork.workOrderStatus}}</textarea>
						<label> </label> 
						
						<label for="workOrderNumber">Work Order Number</label> 
						<input type="number" name="workOrderNumber" ng-model=selectedWork.workOrderNumber
							class="form-control" id="workOrderNumber" value={{selectedWork.workOrderNumber}}
							placeholder="Work Order Number"> <label> </label> 
							
							
						<label for="workOrderDate">Date of Work Order</label>
						<input type="date" name="workOrderDate" class="form-control" value={{selectedWork.workOrderDate}}
						ng-model=selectedWork.workOrderDate id="workOrderDate" placeholder="Date of Work Order">
						<label> </label> 
						
						<label for="valueOfWork">Value of Work</label> 
						<input type="text" name="valueOfWork" class="form-control" value={{selectedWork.valueOfWork}}
						ng-model=selectedWork.valueOfWork id="valueOfWork" placeholder="Value of Work"> <label> </label> 

						<label for="formalitiesCompleted">Are Formalities Completed?</label>
						<input type="checkbox" name="formalitiesCompleted" class="form-control"
							id="formalitiesCompleted" ng-model=selectedWork.formalitiesCompleted
							placeholder="Formalities Completed"> <label> </label> 
							
						<label for="securityDepositBGAmount">Security Deposit BG Amount</label> 
						<input type="text" name="securityDepositBGAmount" class="form-control" ng-model=selectedWork.securityDepositBGAmount 
							id="securityDepositBGAmount" value={{selectedWork.securityDepositBGAmount}}
							 placeholder="Security Deposit BG Amount">
						<label> </label> 
						
						<label for="securityDeposityBGDate">Security Deposit BG Date</label> 
						<input type="date" name="securityDeposityBGDate" class="form-control" ng-model=selectedWork.securityDepositBGDate
						id="securityDeposityBGDate" value={{selectedWork.securityDepositBGDate}}
						 placeholder="Security Deposit BG Date">	<label> </label> 
							
						<label for="validityOfSecurityDepositBG">Validity Of Security Deposit BG</label>
						<input type="date" name="validityOfSecurityDepositBG" value={{selectedWork.validityOfSecurityDepositBG}}
						class="form-control" id="validityOfSecurityDepositBG" ng-model=selectedWork.validityOfSecurityDepositBG
							placeholder="Validity Of Security Deposit BG"> <label> </label> 
						
						<label for="dateOfWorkCompletionAsPerWorkOrder">Date of Work Completion as per work Order</label> 
						<input type="date" name="dateOfWorkCompletionAsPerWorkOrder" value={{selectedWork.dateOfWorkCompletionAsPerWorkOrder}}
						class="form-control" id="dateOfWorkCompletionAsPerWorkOrder" ng-model=selectedWork.dateOfWorkCompletionAsPerWorkOrder
							placeholder="Date of Work Completion as per work Order"> <label> 
							
						</label> <label	for="dateOfInspection">Date Of Inspection</label>
						<input type="date" name="dateOfInspection" value={{selectedWork.dateOfInspection}} 
						class="form-control" id="dateOfInspection" ng-model=selectedWork.dateOfInspection
							placeholder="Date Of Inspection"> <label> </label> 
						
						<label for="dateOfMaterialDelivery">Date Of Material Delivery	</label> 
						<input type="date" name="dateOfMaterialDelivery" value={{selectedWork.dateOfMaterialDelivery}} 
						class="form-control" id="dateOfMaterialDelivery" ng-model=selectedWork.dateOfMaterialDelivery
							placeholder="Date Of Material Delivery"> <label>	</label> 
						
						<label for="dateOfWorkCompletion">Date of Work Completion</label>
						<input type="date" name="dateOfWorkCompletion" class="form-control" ng-model=selectedWork.dateOfWorkCompletion
							id="dateOfWorkCompletion" value={{selectedWork.dateOfWorkCompletion}}
							placeholder="Date Of Work Completion">
						<label> </label> 
						
						<label for="projectCompletedInTime">Project Completed in Time</label> 
						<input type="checkbox" name="projectCompletedInTime" class="form-control" 
						id="projectCompletedInTime" ng-model=selectedWork.projectCompletedInTime
							placeholder="Project Completed in Time"> <label> </label> 
							
						<label for="expensesMadeAsOnDate">Expenses made as On Date</label>
						<input type="text" name="expensesMadeAsOnDate" class="form-control"	 ng-model=selectedWork.expensesMadeAsOnDate
						id="expensesMadeAsOnDate" value={{selectedWork.expensesMadeAsOnDate}}
							placeholder="Expenses made as On Date"> <label> </label> 
							
						<label for="invoiceNumber">Invoice Number</label>
						<input type="text" name="invoiceNumber" class="form-control" ng-model=selectedWork.invoiceNumber
							id="invoiceNumber" value={{selectedWork.invoiceNumber}}
							placeholder="Invoice Number"> <label> </label> 
							
						<label for="dateOfInvoice">Date of Invoice</label>
						<input type="date" name="dateOfInvoice" class="form-control" ng-model=selectedWork.dateOfInvoice
							id="dateOfInvoice" value={{selectedWork.dateOfInvoice}}
							placeholder="Date Of Invoice">					
						<label> </label> 
						
						<label for="dateOfReceiptOfPayment">Date Of Receipt Of payment</label>
						<input type="date" name="dateOfReceiptOfPayment" class="form-control"  ng-model=selectedWork.dateOfReceiptOfPayment
							id="dateOfReceiptOfPayment" value={{selectedWork.dateOfReceiptOfPayment}}
							placeholder="Date Of Receipt Of payment">
						<label> </label> 
						
						<label for="workCompletedInAllRespect">Work Completed In All Respect</label>
						<input type="checkbox" name="workCompletedInAllRespect" class="form-control" id="workCompletedInAllRespect"
						ng-model=selectedWork.workCompletedInAllRespect	placeholder="Work Completed In All Respect">
							
						<label> </label> 
						<button type="submit" class="btn btn-primary" ng-click="submitForm(selectedWork)">Update work!</button>
 
					</form>

				</section>

			</div>
		</div>
	</div>
</div>

<%} else { %>
	<jsp:include page="loginpanel.jsp" />
	<%} %>
