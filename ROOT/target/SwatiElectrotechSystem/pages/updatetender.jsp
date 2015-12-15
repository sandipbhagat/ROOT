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
		<li class="current"><a href="#/newtenders">New Tenders</a></li>
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
<div id="main-wrapper" ng-controller="tenderDetailsCtrl">
	<div id="main" class="container">
		<div class="row 200%">
			<div class="12u">

				<section class="box highlight">
					<header>
						
					</header>
					<h3>
						<font color="#ff3333">Edit Tender</font>
					</h3>
					<form role="form" ><!-- action="http://localhost:8080/SwatiElectrotechSystem/tender/update" method="POST"> -->
					
						<label for="id">Tender Id<font color="red">*</font></label>
						<input type="text" name="id" class="form-control" id="id" value={{selectedTender.id}} ng-model=selectedTender.id
							placeholder="Tender Id" readonly="readonly" > <label> </label> 
						
						<label for="name">Name of Customer<font color="red">*</font></label>
						<input type="text" name="nameOfCustomer" class="form-control"
							id="nameofcustomer" required="required" value={{selectedTender.nameOfCustomer}} ng-model=selectedTender.nameOfCustomer
							placeholder="name of customer"> <label> </label> 
							
						<label	for="scopeOfWork">Scope Of Work<font color="red">*</font></label>
						<textarea name="scopeOfWork" class="form-control"
							id="scopeOfWork" required="required" ng-model=selectedTender.scopeOfWork
							placeholder="Scope Of Work">{{selectedTender.scopeOfWork}}</textarea>
						<label> </label> 
						
						<label for="estimatedValue">Estimated Value<font color="red">*</font></label>
						<input type="text" name="estimatedValue" class="form-control" 
							id="estimatedValue" required="required" value={{selectedTender.estimatedValue}} ng-model=selectedTender.estimatedValue
							placeholder="Estimated Value">
						<label> </label> 
						
						<label for="dueDate">Due Date<font color="red">*</font></label> 
						<input type="date" name="dueDate" class="form-control" 
						id="dueDate" required="required" value={{selectedTender.dueDate}} ng-model=selectedTender.dueDate
							placeholder="Due Date"> <label> </label>
							
						<label for="emd">EMD<font color="red">*</font></label>
						<input type="text" name="emd" class="form-control" 
							id="emd" required="required" value={{selectedTender.emd}} ng-model=selectedTender.emd
							placeholder="EMD">
						<label> </label> 
						
						<label for="interested">Interested?<font color="red">*</font></label> 
						<input type="checkbox" name="interested" class="form-control"
							id="interested" required="required" ng-model=selectedTender.interested 
							placeholder="Interested"> <label> </label>
							
						<label for="statusOfTender">Status Of tender<font color="red">*</font></label>
						<input type="text" name="statusOfTender" class="form-control"
							id="statusOfTender" required="required" value={{selectedTender.statusOfTender}} ng-model=selectedTender.statusOfTender
							placeholder="Status Of Tender"> <label> </label> 
							
						<label for="systemEnteredDate">System Entered Date<font color="red">*</font></label> 
						<input type="date" name="systemEnteredDate" class="form-control"
							id="systemEnteredDate" required="required" value={{selectedTender.systemEnteredDate}} ng-model=selectedTender.systemEnteredDate
							placeholder="System Entered Date">
						<label> </label> 
						
						<label for="tenderSubmitted">Tender Submitted</label> 
						<input type="checkbox" name="tenderSubmitted"
							class="form-control" id="tenderSubmitted" ng-model=selectedTender.tenderSubmitted
							placeholder="Tender Submitted">
						<label> </label> 
						
						<label for="submittedDate">Tender Submitted Date</label> 
						<input type="date" name="submittedDate"
							class="form-control" id="submittedDate" value={{selectedTender.submittedDate}} ng-model=selectedTender.submittedDate
							placeholder="Tender Submitted Date"> <label> </label> 
							
						<label for="technicalBidOpened">Technical Bid Opened</label> 
						<input type="checkbox" name="technicalBidOpened" class="form-control" id="technicalBidOpened" 
						ng-model=selectedTender.technicalBidOpened
							placeholder="Technical Bid Opened"> <label> </label> 
							
						<label for="technicalBidOpeningDate">Technical Bid Opening Date</label>
						<input type="date" name="technicalBidOpeningDate" class="form-control"
							id="technicalBidOpeningDate" value={{selectedTender.technicalBidOpeningDate}} ng-model=selectedTender.technicalBidOpeningDate
							placeholder="Technical Bid Opening Date"> <label> </label> 
							
						<label for="technicallyQualified">Technically Qualified</label> 
						<input type="checkbox" name="technicallyQualified"
							class="form-control" id="technicallyQualified" ng-model=selectedTender.technicallyQualified
							placeholder="Technically Qualified"> <label>
						</label> 
						
						<label for="priceBidOpened">Price Bid Opened</label>
						<input type="checkbox" name="priceBidOpened" class="form-control" 
							id="priceBidOpened" ng-model=selectedTender.priceBidOpened
							placeholder="price Bid Opened">
						<label> </label> 
						
						<label for="priceBidOpeningDate">Price Bid Opened Date</label> 
						<input type="date" name="priceBidOpeningDate" class="form-control" id="priceBidOpeningDate"
							value={{selectedTender.priceBidOpeningDate}} ng-model=selectedTender.priceBidOpeningDate
							placeholder="Price Bid Opened Date"> <label> </label> 
							
						<label for="lowestBidder">Lowest Bidder</label>
						<input type="checkbox" name="lowestBidder" class="form-control" ng-model=selectedTender.lowestBidder
							id="lowestBidder" placeholder="Lowest Bidder"> <label> </label>
							
						<button type="submit" class="btn btn-primary" ng-click="submitForm(selectedTender)">Update Tender!</button>

					</form>
					
					<h3>
						<font color="#ff3333"> Parties Involved</font>
					</h3>
					<fieldset  data-ng-repeat="party in parties">
				      <input type="text" ng-model="party.nameOfParty" name="" placeholder="Enter Party Name">
				      <input type="text" ng-model="party.rates" name="" placeholder="Enter Party Rate">
				      <button class="remove"  ng-if="party.id" ng-click="removeChoice($index,party.id)">-</button>
				      <button class="add"  ng-if="!party.id" >+</button>
				      <button class="remove"  ng-if="!party.id" ng-click="remove($index)">-</button>
				   </fieldset>
				   <button class="addfields" ng-click="addNewChoice()">Add field</button>
				   <button class="addfields" ng-click="saveAllParties(parties)">Save All</button>
				   
<!-- 				   <h3>
						<font color="#ff3333">Documents</font>
					</h3>
					<fieldset  data-ng-repeat="document in documents">
				      <input type="file" ng-model="document.url" name="" placeholder="Select a file">
				      <input type="file" multiple="multiple" data-dbinf-on-files-selected="fileUpload(selectedFileList)">				      
				      <button class="remove"  ng-if="document.id" ng-click="removeDocumentChoice($index,document.id)">-</button>
				      <button class="add"  ng-if="!document.id" >+</button>
				      <button class="remove"  ng-if="!document.id" ng-click="removeDocument($index)">-</button>
				   </fieldset>
				   <button class="addfields" ng-click="addNewDocumentChoice()">Add Document</button>
				   <button class="addfields" ng-click="saveAllDocuments(documents)">Save All</button> -->
				</section>

			</div>
		</div>
	</div>
</div>

<%} else { %>
	<jsp:include page="loginpanel.jsp" />
	<%} %>
