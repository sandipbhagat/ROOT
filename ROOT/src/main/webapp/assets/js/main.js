
(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				speed: 300,
				alignment: 'center'
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

var app = angular.module('swatielectrotech', [
                                   'ngRoute', 'ui.bootstrap', 'ngSanitize'
                                 ]);

                                 /**
                                  * Configure the Routes
                                  */
                                 app.config(['$routeProvider', function ($routeProvider) {
                                   $routeProvider
                                     // Home
                                     .when("/", {templateUrl: "pages/home.jsp", controller: "PageCtrl"})
                                     // Pages
                                     .when("/aboutus", {templateUrl: "pages/aboutus.html", controller: "PageCtrl"})
                                     .when("/loginpanel", {templateUrl: "pages/loginpanel.jsp", controller: "PageCtrl"})
                                     .when("/employeepanel", {templateUrl: "pages/employeepanel.jsp", controller: "homeCtrl"})                                     
                                     .when("/addnewtender", {templateUrl: "pages/addnewtender.jsp", controller: "tenderDetailsCtrl"})
                                     .when("/updatetender", {templateUrl: "pages/updatetender.jsp", controller: "tenderDetailsCtrl"})
                                     .when("/newtenders", {templateUrl: "pages/newtenders.jsp", controller: "NewTendersCtrl"})
                                     .when("/tendersinprocess", {templateUrl: "pages/tendersinprocess.jsp", controller: "tendersInProcessCtrl"})
                                     .when("/tendersdisqualified", {templateUrl: "pages/tendersDisqualified.jsp", controller: "tendersDisqualifiedCtrl"})
                                     .when("/tenderDetails", {templateUrl: "pages/tenderdetails.jsp", controller: "tenderDetailsCtrl"})
                                     .when("/workDetails", {templateUrl: "pages/workdetails.jsp", controller: "workDetailsCtrl"})
                                     .when("/worksinprocess", {templateUrl: "pages/worksinprocess.jsp", controller: "worksCtrl"})
                                     .when("/workscompleted", {templateUrl: "pages/workscompleted.jsp", controller: "worksCompletedCtrl"})
                                     .when("/addnewwork", {templateUrl: "pages/addNewWork.jsp", controller: "workDetailsCtrl"})
                                     .when("/analysis", {templateUrl: "pages/analysis.jsp", controller: "analysisCtrl"})
                                     // else 404 
                                     .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
                                 }]);
                                 
 /**
  * Controls all other Pages
  */
                                 
     app.factory('tenderService', function() {
    	 var Data = {};
    	 function set(data) {
    	   Data = data;
    	 }
    	 function get() {
    	  return Data;
    	 }

    	 return {
    	  set: set,
    	  get: get
    	 };

    	});
     
     app.factory('workService', function() {
    	 var Data = {};
    	 function set(data) {
    	   Data = data;
    	 }
    	 function get() {
    	  return Data;
    	 }

    	 return {
    	  set: set,
    	  get: get
    	 };

    	});
     
 app.controller('PageCtrl', [function($scope) {
	
	
	}]);

 
 app.filter('offset', function() {
	  return function(input, start) {
	    start = parseInt(start, 10);
	    return input.slice(start);
	  };
	});

	  app.controller('NewTendersCtrl', ['$scope','$http','$location', 'tenderService','$route', function( $scope, $http, $location, tenderService, $route) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedTender = tenderService.get();
		  
		  $scope.viewTenderDetails = function (item) {
			  tenderService.set(item),
			  $location.path('/tenderDetails');			 
		    };
		 
			  $scope.AddNew = function () {
				  tenderService.set(null),
				  $location.path('/addnewtender');			 
			    };   
		 //Slick Grid Code

		    var dataView;
		    var grid;
		    var data = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };
		    
		    function viewformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    function deleteformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    var columns = [
		                   { id: "id", name: "Tender ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 220, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 220, sortable: true },
		                   { id: "estimatedValue", name: "Estimated Value", field: "estimatedValue", width: 150, sortable: true },
		                   { id: "dueDate", name: "Due Date", field: "dueDate", width: 120, sortable: true },
		                   { id: "emd", name: "EMD", field: "emd", width: 100, sortable: true },
		                   { id: "interested", name: "Interested", field: "interested", width: 100, formatter: Slick.Formatters.YesNo, sortable: true },
		                   { id: "view", name: "Details", field: "view", width: 90, formatter: viewformatter},
		                   { id: "deleteTender", name: "Delete", field: "deleteTender", width: 90, formatter: deleteformatter}
		                 ];
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }
		    
	      $.getJSON('/tender/newtender/list', function(data) {

		    	  		dataView = new Slick.Data.DataView();
					      
					      grid = new Slick.Grid("#newTendersGrid", dataView, columns, options);
					      dataView.onRowCountChanged.subscribe(function (e, args) {
					        grid.updateRowCount();
					        grid.render();
					      });
					      dataView.onRowsChanged.subscribe(function (e, args) {
					        grid.invalidateRows(args.rows);
					        grid.render();
					      });
					      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
					        var columnId = $(this).data("columnId");
					        if (columnId != null) {
					          columnFilters[columnId] = $.trim($(this).val());
					          dataView.refresh();
					        }
					      });
					      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
					          $(args.node).empty();
					          $("<input type='text'>")
					             .data("columnId", args.column.id)
					             .val(columnFilters[args.column.id])
					             .appendTo(args.node);
					      });
					  		    
					      var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

					      
					      grid.onSort.subscribe(function (e, args) {
					    	  sortcol = args.sortCols[0].sortCol.field;
					    	  dataView.sort(comparer, args.sortCols[0].sortAsc);
					    	});

					    	function comparer(a, b) {
					    	  var x = a[sortcol], y = b[sortcol];
					    	  return (x == y ? 0 : (x > y ? 1 : -1));
					    	}
					      var gridData = [];
					      
					      for(var i=0; i < data.length; i++ )
					    	  {
					    	  		gridData[i] = {
					    	  			id : data[i].id,
					    	  			nameOfCustomer : data[i].nameOfCustomer,
					    	  			scopeOfWork : data[i].scopeOfWork,
					    	  			estimatedValue : data[i].estimatedValue,
					    	  			dueDate : data[i].dueDate,
					    	  			emd : data[i].emd,
					    	  			interested : data[i].interested,
					    	  			view : "<a href='#/tenderDetails' class='viewButton' tabindex='0'>View</a>",
					    	  			deleteTender : "<a href='#/newtenders' class='deleteButton' tabindex='0'>Delete</a>"
					    	  		};
					    	  }
					      
					      grid.onClick.subscribe(function(e,args) {
					    	  	   var item = data[args.row]; //args.grid.getDataItem(args.row);
					    	  	 if (args.cell == grid.getColumnIndex('view'))
					    		   $scope.viewTenderDetails(item);
					    	  	 
					    	  	 if (args.cell == grid.getColumnIndex('deleteTender'))
					    	  		 {
					    	  		$http({
					    	  		  method: 'GET',
					    	  		  url: '/tender/delete/'+item.id
					    	  		}).then(function successCallback(response) {
					    	  			alert("Tender Successfully Deleted !!");	
					    	  			$route.reload();
					    	  		  }, function errorCallback(response) {
					    	  			alert("Failed to Delete !!");	
					    	  		  });
					    	  		 }
					    	});
					      
					    	grid.init();
				    	    dataView.beginUpdate();
				    	    dataView.setItems(gridData);
				    	    dataView.setFilter(filter);
				    	    dataView.endUpdate();

		    });
		    //Slick Grid Ends
		    
	    }])	    	    

	    
	   app.controller('tenderDetailsCtrl', ['$scope','$http', 'tenderService','$route','$location',function($scope, $http, tenderService, $route, $location) {
		   
		   $scope.selectedTenderwithoutFormatting = tenderService.get();
		   
		   if($scope.selectedTenderwithoutFormatting !== null)
			   {
					   $scope.selectedTender = {
							   id :  $scope.selectedTenderwithoutFormatting.id,
							   nameOfCustomer : $scope.selectedTenderwithoutFormatting.nameOfCustomer,
							   scopeOfWork : $scope.selectedTenderwithoutFormatting.scopeOfWork,
							   estimatedValue : $scope.selectedTenderwithoutFormatting.estimatedValue,
							   dueDate : new Date(formatDate($scope.selectedTenderwithoutFormatting.dueDate)),
							   emd : $scope.selectedTenderwithoutFormatting.emd,
							   interested : $scope.selectedTenderwithoutFormatting.interested,
							   statusOfTender : $scope.selectedTenderwithoutFormatting.statusOfTender,
							   systemEnteredDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.systemEnteredDate)),
							   tenderSubmitted: $scope.selectedTenderwithoutFormatting.tenderSubmitted ,
							   submittedDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.submittedDate)),
							   technicalBidOpened: $scope.selectedTenderwithoutFormatting.technicalBidOpened,
							   technicalBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.technicalBidOpeningDate)),
							   technicallyQualified: $scope.selectedTenderwithoutFormatting.technicallyQualified,
							   priceBidOpened: $scope.selectedTenderwithoutFormatting.priceBidOpened,
							   priceBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.priceBidOpeningDate)),
							   lowestBidder: $scope.selectedTenderwithoutFormatting.lowestBidder,
							   addressOfCustomer: $scope.selectedTenderwithoutFormatting.addressOfCustomer, 
							   tenderNumber: $scope.selectedTenderwithoutFormatting.tenderNumber, 
							   nameOfContactPerson: $scope.selectedTenderwithoutFormatting.nameOfContactPerson, 
							   numberOfContactPerson: $scope.selectedTenderwithoutFormatting.numberOfContactPerson, 
							   preQualificationCriteria: $scope.selectedTenderwithoutFormatting.preQualificationCriteria, 
							   preBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.preBidOpeningDate)),
							   tenderFee: $scope.selectedTenderwithoutFormatting.tenderFee, 
							   tenderPurchaseDueDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.tenderPurchaseDueDate)),
							   bgIsAcceptableOrNot: $scope.selectedTenderwithoutFormatting.bgIsAcceptableOrNot, 
							   tenderSubmission: $scope.selectedTenderwithoutFormatting.tenderSubmission, 
							   paymentTerms: $scope.selectedTenderwithoutFormatting.paymentTerms, 
							   offerValidity: new Date(formatDate($scope.selectedTenderwithoutFormatting.offerValidity)), 
							   guaranteePeriod: $scope.selectedTenderwithoutFormatting.guaranteePeriod, 
							   deliveryPeriod: $scope.selectedTenderwithoutFormatting.deliveryPeriod, 
							   performanceGuarantee: $scope.selectedTenderwithoutFormatting.performanceGuarantee,
							   specialTermsAndCond: $scope.selectedTenderwithoutFormatting.specialTermsAndCond, 
							   specialDocsToAttach: $scope.selectedTenderwithoutFormatting.specialDocsToAttach, 
							   sheetPreparedBy: $scope.selectedTenderwithoutFormatting.sheetPreparedBy
					   }
			   }
		   
		   function formatDate(date) {
			    var d = new Date(date),
			        month = '' + (d.getMonth() + 1),
			        day = '' + d.getDate(),
			        year = d.getFullYear();

			    if (month.length < 2) month = '0' + month;
			    if (day.length < 2) day = '0' + day;

			    return [year, month, day].join('-');
			}
		   
		   $scope.submitForm = function(selectedTender) {
		        // Posting data
			   
			   var data = $.param({
				   "id": selectedTender.id,
				   "nameOfCustomer": selectedTender.nameOfCustomer,
				   "scopeOfWork": selectedTender.scopeOfWork,
				   "estimatedValue": selectedTender.estimatedValue,
				   "dueDate": formatDate(selectedTender.dueDate),
				   "emd": selectedTender.emd, 
				   "interested": selectedTender.interested,
				   "statusOfTender": selectedTender.statusOfTender,
				   "systemEnteredDate": formatDate(selectedTender.systemEnteredDate),
				   "tenderSubmitted": selectedTender.tenderSubmitted,
				   "submittedDate": formatDate(selectedTender.submittedDate),
				   "technicalBidOpened": selectedTender.technicalBidOpened,
				   "technicalBidOpeningDate": formatDate(selectedTender.technicalBidOpeningDate),
				   "technicallyQualified": selectedTender.technicallyQualified,
				   "priceBidOpened": selectedTender.priceBidOpened,
				   "priceBidOpeningDate": formatDate(selectedTender.priceBidOpeningDate),
				   "lowestBidder": selectedTender.lowestBidder,
				   "addressOfCustomer": selectedTender.addressOfCustomer,
				   "tenderNumber": selectedTender.tenderNumber,
				   "nameOfContactPerson": selectedTender.nameOfContactPerson,
				   "numberOfContactPerson": selectedTender.numberOfContactPerson,
				   "preQualificationCriteria": selectedTender.preQualificationCriteria,
				   "preBidOpeningDate": formatDate(selectedTender.preBidOpeningDate),
				   "tenderFee": selectedTender.tenderFee,
				   "tenderPurchaseDueDate": formatDate(selectedTender.tenderPurchaseDueDate),
				   "bgIsAcceptableOrNot": selectedTender.bgIsAcceptableOrNot,
				   "tenderSubmission": selectedTender.tenderSubmission,
				   "paymentTerms": selectedTender.paymentTerms,
				   "offerValidity": formatDate(selectedTender.offerValidity),
				   "guaranteePeriod": selectedTender.guaranteePeriod,
				   "deliveryPeriod": selectedTender.deliveryPeriod,
				   "performanceGuarantee": selectedTender.performanceGuarantee,
				   "specialTermsAndCond": selectedTender.specialTermsAndCond,
				   "specialDocsToAttach": selectedTender.specialDocsToAttach,
				   "sheetPreparedBy": selectedTender.sheetPreparedBy
				   });
			     if(selectedTender.lowestBidder)
				   {
					   var workData = $.param({
						   "tenderId": selectedTender.id,
						   "nameOfCustomer": selectedTender.nameOfCustomer,
						   "scopeOfWork": selectedTender.scopeOfWork,
					   	});
			    	 
				   $http({
		    	  		  method: 'POST',
		    	  		  url: '/work/create',
				          data    : workData,
				          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		    	  		}).then(function successCallback(response) {
		    	  			alert("Tender Moved to work !!");	
		    	  		  }, function errorCallback(response) {
		    	  			alert("Tender Failed to Move to work !!");	
		    	  		  });
				   }
			   
		        $http({
	    	  		  method: 'POST',
	    	  		  url: '/tender/update',
			          data    : data,
			          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	    	  		}).then(function successCallback(response) {
	    	  			alert("Tender Successfully Updated !!");	
	    	  			$location.path('/newtenders');
	    	  		  }, function errorCallback(response) {
	    	  			alert("Failed to Update !!");	
	    	  		  });
		        
		        };
		        
				   $scope.submitNewForm = function(selectedTender) {
				        // Posting data
					   
					   
					   var data = $.param({
						   "nameOfCustomer": selectedTender.nameOfCustomer,
						   "scopeOfWork": selectedTender.scopeOfWork,
						   "estimatedValue": selectedTender.estimatedValue,
						   "dueDate": formatDate(selectedTender.dueDate),
						   "emd": selectedTender.emd, 
						   "interested": selectedTender.interested,
						   "statusOfTender": selectedTender.statusOfTender,
						   "systemEnteredDate": formatDate(selectedTender.systemEnteredDate),
						   "tenderSubmitted": (typeof($scope.selectedTender.tenderSubmitted)==='undefined') ? false : selectedTender.tenderSubmitted,
						    "submittedDate":(typeof($scope.selectedTender.submittedDate)==='undefined') ? new Date(0) : formatDate(selectedTender.submittedDate),
						    "technicalBidOpened":(typeof($scope.selectedTender.technicalBidOpened)==='undefined') ? false : selectedTender.technicalBidOpened,
						    "technicalBidOpeningDate": (typeof($scope.selectedTender.technicalBidOpeningDate)==='undefined') ? new Date(0) : formatDate(selectedTender.technicalBidOpeningDate),
						    "technicallyQualified" : (typeof($scope.selectedTender.technicallyQualified)==='undefined') ? false : selectedTender.technicallyQualified,
						    "priceBidOpened" : (typeof($scope.selectedTender.priceBidOpened)==='undefined') ? false : selectedTender.priceBidOpened,
						    "priceBidOpeningDate" :  (typeof($scope.selectedTender.priceBidOpeningDate)==='undefined') ? new Date(0) : formatDate(selectedTender.priceBidOpeningDate),
						    "lowestBidder" : (typeof($scope.selectedTender.lowestBidder)==='undefined') ? false : selectedTender.lowestBidder,
						    "addressOfCustomer" : (typeof($scope.selectedTender.addressOfCustomer)==='undefined') ? "" : selectedTender.addressOfCustomer,
						    "tenderNumber" : (typeof($scope.selectedTender.tenderNumber)==='undefined') ? "" : selectedTender.tenderNumber,
						    "nameOfContactPerson" : (typeof($scope.selectedTender.nameOfContactPerson)==='undefined') ? "" : selectedTender.nameOfContactPerson,
						    "numberOfContactPerson" : (typeof($scope.selectedTender.numberOfContactPerson)==='undefined') ? "" : selectedTender.numberOfContactPerson,
						    "preQualificationCriteria" : (typeof($scope.selectedTender.preQualificationCriteria)==='undefined') ? "" : selectedTender.preQualificationCriteria,
						    "preBidOpeningDate":(typeof($scope.selectedTender.preBidOpeningDate)==='undefined') ? new Date(0) : formatDate(selectedTender.preBidOpeningDate),
						    "tenderFee" : (typeof($scope.selectedTender.tenderFee)==='undefined') ? "" : selectedTender.tenderFee,
						    "tenderPurchaseDueDate":(typeof($scope.selectedTender.tenderPurchaseDueDate)==='undefined') ? new Date(0) : formatDate(selectedTender.tenderPurchaseDueDate),
						    "bgIsAcceptableOrNot" : (typeof($scope.selectedTender.bgIsAcceptableOrNot)==='undefined') ? false : selectedTender.bgIsAcceptableOrNot,
						    "tenderSubmission" : (typeof($scope.selectedTender.tenderSubmission)==='undefined') ? "" : selectedTender.tenderSubmission,
						    "paymentTerms" : (typeof($scope.selectedTender.paymentTerms)==='undefined') ? "" : selectedTender.paymentTerms,
						    "offerValidity":(typeof($scope.selectedTender.offerValidity)==='undefined') ? new Date(0) : formatDate(selectedTender.offerValidity),
						    "guaranteePeriod" : (typeof($scope.selectedTender.guaranteePeriod)==='undefined') ? "" : selectedTender.guaranteePeriod,
						    "deliveryPeriod" : (typeof($scope.selectedTender.deliveryPeriod)==='undefined') ? "" : selectedTender.deliveryPeriod,
						    "performanceGuarantee" : (typeof($scope.selectedTender.performanceGuarantee)==='undefined') ? "" : selectedTender.performanceGuarantee,
						    "specialTermsAndCond" : (typeof($scope.selectedTender.specialTermsAndCond)==='undefined') ? "" : selectedTender.specialTermsAndCond,
						    "specialDocsToAttach" : (typeof($scope.selectedTender.specialDocsToAttach)==='undefined') ? "" : selectedTender.specialDocsToAttach,
						    "sheetPreparedBy" : (typeof($scope.selectedTender.sheetPreparedBy)==='undefined') ? "" : selectedTender.sheetPreparedBy
						   
						   });
		        
					     if(selectedTender.lowestBidder)
						   {
							   var workData = $.param({
								   "tenderId": selectedTender.id,
								   "nameOfCustomer": selectedTender.nameOfCustomer,
								   "scopeOfWork": selectedTender.scopeOfWork,
							   	});
					    	 
						   $http({
				    	  		  method: 'POST',
				    	  		  url: '/work/create',
						          data    : workData,
						          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
				    	  		}).then(function successCallback(response) {
				    	  			alert("Tender Moved to work !!");	
				    	  		  }, function errorCallback(response) {
				    	  			alert("Tender Failed to Move to work !!");	
				    	  		  });
						   }
					   
				        $http({
			    	  		  method: 'POST',
			    	  		  url: '/tender/create',
					          data    : data,
					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
			    	  		}).then(function successCallback(response) {
			    	  			alert("Tender Successfully Created !!");	
			    	  			$location.path('/newtenders');
			    	  		  }, function errorCallback(response) {
			    	  			alert("Failed to Create !!");	
			    	  		  });
				        
				        };
				        
				        //To Add Parties Involved
				        
				        if(typeof($scope.selectedTender) !== "undefined" )
			        	{
				        $scope.parties = [{tempid: 'choice1'}];

						        $( function (){
						    	  $http({
					    	  		  method: 'GET',
					    	  		  url: '/parties/list/'+$scope.selectedTender.id,
							          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
					    	  		}).then(function successCallback(response) {
					    	  			//alert("Tender Successfully Created !!");
					    	  			//$scope.parties.splice(index,1);
					    	  			//$location.path('/newtenders');
					    	  			$scope.parties = response.data;
					    	  		  }, function errorCallback(response) {
					    	  			//alert("Failed to Create !!");	
					    	  		  });
						        })			        	
				        	
				    	  
				        $scope.addNewChoice = function() {
				          var newItemNo = $scope.parties.length+1;
				          $scope.parties.push({'tempid':'choice'+newItemNo});
				        };
				        
				        $scope.saveAllParties = function(parties) {
							      for (var i=0 ; i < parties.length ; i++) {
							    	  
						    		  if(typeof(parties[i].id) === "undefined" )
					    			  {
								    	  var data = $.param({
							    		  		"tenderId": $scope.selectedTender.id,
							    		  		"nameOfParty" : parties[i].nameOfParty,
							    		  		"rates" : parties[i].rates
										   });
					    			  }
						    		  else
							    		{
								    	  var data = $.param({
								    		  		"tenderId": parties[i].tenderId,
								    		  		"id" : parties[i].id,
								    		  		"nameOfParty" : parties[i].nameOfParty,
								    		  		"rates" : parties[i].rates
											   });
							    		}
							    	  
							    	  $http({
						    	  		  method: 'POST',
						    	  		  url: '/parties/addorupdate',
								          data    : data, //forms user object
								          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
						    	  		}).then(function successCallback(response) {
						    	  			//alert("Tender Successfully Created !!");
						    	  			//$scope.parties.splice(index,1);
						    	  			//$location.path('/newtenders');
						    	  		  }, function errorCallback(response) {
						    	  			//alert("Failed to Create !!");	
						    	  		  });	
								}
							    // To Update Parties invilved  
							      $route.reload();
					        };
				          
				        $scope.removeChoice = function(index,id) {
					        $http({
				    	  		  method: 'GET',
				    	  		  url: '/parties/delete/'+id,
						          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
				    	  		}).then(function successCallback(response) {
				    	  			//alert("Tender Successfully Created !!");
				    	  			$scope.parties.splice(index,1);
				    	  			//$location.path('/newtenders');
				    	  		  }, function errorCallback(response) {
				    	  			//alert("Failed to Create !!");	
				    	  		  });				          
				        };
				        
				        $scope.remove = function(index) {
				        	$scope.parties.splice(index,1);
				        };
				        
				        //For Uploading Documents
				        $scope.documents = [{tempid: 'choice1'}];
				        $( function (){
				    	  $http({
			    	  		  method: 'GET',
			    	  		  url: '/documents/getDocuments/'+$scope.selectedTender.id,
					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
			    	  		}).then(function successCallback(response) {
			    	  			//alert("Tender Successfully Created !!");
			    	  			//$scope.parties.splice(index,1);
			    	  			//$location.path('/newtenders');
			    	  			$scope.documents = response.data;
			    	  		  }, function errorCallback(response) {
			    	  			//alert("Failed to Create !!");	
			    	  		  });
				        })
				        
				        $scope.addNewDocumentChoice = function() {
					          var newItemNo = $scope.documents.length+1;
					          $scope.documents.push({'tempid':'choice'+newItemNo});
					        };
					        
					        $scope.fileUpload = function (filelist) {
					            for (var i = 0; i < filelist.length; ++i) {
					            	var formData = new FormData();
					            	formData.append("file" ,  filelist.item(i));
					                var file = filelist.item(i);
					                var workingDirectory = $location.path();
					                //do something with file; remember to call $scope.$apply() to trigger $digest (dirty checking)
					                alert(file.name);
					               }
					        };
					        
					        $scope.saveAllDocuments = function(documents) {
								      for (var i=0 ; i < documents.length ; i++) {
								    	  
							    		  if(typeof(documents[i].id) === "undefined" )
						    			  {
									    	  var data = $.param({
								    		  		"tenderId": $scope.selectedTender.id,
								    		  		"url" : documents[i].url,
								    		  		"uploadedDate" : new Date(),
								    		  		"downloaded" : false
											   });
						    			  }
							    		  else
								    		{
									    	  var data = $.param({
									    		  		"tenderId": documents[i].tenderId,
									    		  		"id" : documents[i].id,
									    		  		"url" : documents[i].url,
									    		  		"uploadedDate" : documents[i].uploadedDate,
									    		  		"downloaded" : documents[i].downloaded
												   });
								    		}
								    	  
								    	  $http({
							    	  		  method: 'POST',
							    	  		  url: '/documents/addorupdate',
									          data    : data, //forms user object
									          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
							    	  		}).then(function successCallback(response) {
							    	  			//alert("Tender Successfully Created !!");
							    	  			//$scope.parties.splice(index,1);
							    	  			//$location.path('/newtenders');
							    	  		  }, function errorCallback(response) {
							    	  			//alert("Failed to Create !!");	
							    	  		  });	
									}
								    // To Update Documents uploaded  
								      $route.reload();
						        };
					          
					        $scope.removeDocumentChoice = function(index,id) {
						        $http({
					    	  		  method: 'GET',
					    	  		  url: '/documents/delete/'+id,
							          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
					    	  		}).then(function successCallback(response) {
					    	  			//alert("Tender Successfully Created !!");
					    	  			$scope.documents.splice(index,1);
					    	  			//$location.path('/newtenders');
					    	  		  }, function errorCallback(response) {
					    	  			//alert("Failed to Create !!");	
					    	  		  });				          
					        };
					        
					        $scope.removeDocument = function(index) {
					        	$scope.documents.splice(index,1);
					        }; 
					        
					        
						      //--- To Add Contact person-------					        
					        
					        $scope.persons = [{tempid: 'choice1'}];

							        $( function (){
							    	  $http({
						    	  		  method: 'GET',
						    	  		  url: '/contactpersons/getPerson/'+$scope.selectedTender.id,
								          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
						    	  		}).then(function successCallback(response) {
						    	  			//alert("Tender Successfully Created !!");
						    	  			//$scope.parties.splice(index,1);
						    	  			//$location.path('/newtenders');
						    	  			$scope.persons = response.data;
						    	  		  }, function errorCallback(response) {
						    	  			//alert("Failed to Create !!");	
						    	  		  });
							        })			        	
					        	
					    	  
					        $scope.addNewPersonChoice = function() {
					          var newItemNo = $scope.persons.length+1;
					          $scope.persons.push({'tempid':'choice'+newItemNo});
					        };
					        
					        $scope.saveAllPersons = function(persons) {
								      for (var i=0 ; i < persons.length ; i++) {
								    	  
							    		  if(typeof(persons[i].id) === "undefined" )
						    			  {
									    	  var data = $.param({
								    		  		"tenderId": $scope.selectedTender.id,
								    		  		"nameOfPerson" : persons[i].nameOfPerson,
								    		  		"addressOfPerson" : persons[i].addressOfPerson,
								    		  		"phoneNumber" : persons[i].phoneNumber,
								    		  		"email" : persons[i].email
											   });
						    			  }
							    		  else
								    		{
									    	  var data = $.param({
									    		  		"tenderId": persons[i].tenderId,
									    		  		"id" : persons[i].id,
									    		  		"nameOfPerson" : persons[i].nameOfPerson,
									    		  		"addressOfPerson" : persons[i].addressOfPerson,
									    		  		"phoneNumber" : persons[i].phoneNumber,
									    		  		"email" : persons[i].email
												   });
								    		}
								    	  
								    	  $http({
							    	  		  method: 'POST',
							    	  		  url: '/contactpersons/addorupdate',
									          data    : data, //forms user object
									          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
							    	  		}).then(function successCallback(response) {
							    	  			//alert("Tender Successfully Created !!");
							    	  			//$scope.parties.splice(index,1);
							    	  			//$location.path('/newtenders');
							    	  		  }, function errorCallback(response) {
							    	  			//alert("Failed to Create !!");	
							    	  		  });	
									}
								    // To Update  Contact Persons  
								      $route.reload();
						        };
					          
					        $scope.removePersonChoice = function(index,id) {
						        $http({
					    	  		  method: 'GET',
					    	  		  url: '/contactpersons/delete/'+id,
							          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
					    	  		}).then(function successCallback(response) {
					    	  			//alert("Tender Successfully Created !!");
					    	  			$scope.persons.splice(index,1);
					    	  			//$location.path('/newtenders');
					    	  		  }, function errorCallback(response) {
					    	  			//alert("Failed to Create !!");	
					    	  		  });				          
					        };
					        
					        $scope.removePerson = function(index) {
					        	$scope.persons.splice(index,1);
					        };
					        
					        //---- Add Contact persons ends here
					        					        
			        	}
		}
	]);  	

	  
   app.controller('workDetailsCtrl', ['$scope','$http', 'workService','$route','$location',function($scope, $http, workService, $route, $location) {
		   
		   $scope.selectedWorkwithoutFormatting = workService.get();
	
		   if($scope.selectedWorkwithoutFormatting !== null)
		   {
				   $scope.selectedWork = {
						   tenderId : $scope.selectedWorkwithoutFormatting.tenderId,
						   id :  $scope.selectedWorkwithoutFormatting.id,
						   nameOfCustomer : $scope.selectedWorkwithoutFormatting.nameOfCustomer,
						   scopeOfWork : $scope.selectedWorkwithoutFormatting.scopeOfWork,
						   workOrderStatus : $scope.selectedWorkwithoutFormatting.workOrderStatus,
						   workOrderNumber : $scope.selectedWorkwithoutFormatting.workOrderNumber,
						   workOrderDate: new Date(formatDate($scope.selectedWorkwithoutFormatting.workOrderDate)),
						   valueOfWork : $scope.selectedWorkwithoutFormatting.valueOfWork,
						   formalitiesCompleted : $scope.selectedWorkwithoutFormatting.formalitiesCompleted,
						   securityDepositBGAmount : $scope.selectedWorkwithoutFormatting.securityDepositBGAmount,
						   securityDepositBGDate: new Date(formatDate($scope.selectedWorkwithoutFormatting.securityDepositBGDate)),
						   validityOfSecurityDepositBG: new Date(formatDate($scope.selectedWorkwithoutFormatting.validityOfSecurityDepositBG)) ,
						   dateOfWorkCompletionAsPerWorkOrder: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfWorkCompletionAsPerWorkOrder)),
						   dateOfInspection: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfInspection)),
						   dateOfMaterialDelivery: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfMaterialDelivery)),
						   dateOfWorkCompletion: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfWorkCompletion)),
						   projectCompletedInTime: $scope.selectedWorkwithoutFormatting.projectCompletedInTime,
						   expensesMadeAsOnDate: $scope.selectedWorkwithoutFormatting.expensesMadeAsOnDate,
						   invoiceNumber: $scope.selectedWorkwithoutFormatting.invoiceNumber,
						   dateOfInvoice: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfInvoice)),
						   dateOfReceiptOfPayment: new Date(formatDate($scope.selectedWorkwithoutFormatting.dateOfReceiptOfPayment)),
						   workCompletedInAllRespect: $scope.selectedWorkwithoutFormatting.workCompletedInAllRespect 				   
						   
				   }
				   
			        $http({
		    	  		  method: 'GET',
		    	  		  url: '/tender/'+$scope.selectedWorkwithoutFormatting.tenderId,
				          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		    	  		}).then(function successCallback(response) {
		    	  			$scope.selectedTenderwithoutFormatting = response;
		    	  			if($scope.selectedTenderwithoutFormatting !== null)
		    				   {
		    						   $scope.selectedTender = {
		    								   id :  $scope.selectedTenderwithoutFormatting.id,
		    								   nameOfCustomer : $scope.selectedTenderwithoutFormatting.nameOfCustomer,
		    								   scopeOfWork : $scope.selectedTenderwithoutFormatting.scopeOfWork,
		    								   estimatedValue : $scope.selectedTenderwithoutFormatting.estimatedValue,
		    								   dueDate : new Date(formatDate($scope.selectedTenderwithoutFormatting.dueDate)),
		    								   emd : $scope.selectedTenderwithoutFormatting.emd,
		    								   interested : $scope.selectedTenderwithoutFormatting.interested,
		    								   statusOfTender : $scope.selectedTenderwithoutFormatting.statusOfTender,
		    								   systemEnteredDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.systemEnteredDate)),
		    								   tenderSubmitted: $scope.selectedTenderwithoutFormatting.tenderSubmitted ,
		    								   submittedDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.submittedDate)),
		    								   technicalBidOpened: $scope.selectedTenderwithoutFormatting.technicalBidOpened,
		    								   technicalBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.technicalBidOpeningDate)),
		    								   technicallyQualified: $scope.selectedTenderwithoutFormatting.technicallyQualified,
		    								   priceBidOpened: $scope.selectedTenderwithoutFormatting.priceBidOpened,
		    								   priceBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.priceBidOpeningDate)),
		    								   lowestBidder: $scope.selectedTenderwithoutFormatting.lowestBidder,
		    								   addressOfCustomer: $scope.selectedTenderwithoutFormatting.addressOfCustomer, 
		    								   tenderNumber: $scope.selectedTenderwithoutFormatting.tenderNumber, 
		    								   nameOfContactPerson: $scope.selectedTenderwithoutFormatting.nameOfContactPerson, 
		    								   numberOfContactPerson: $scope.selectedTenderwithoutFormatting.numberOfContactPerson, 
		    								   preQualificationCriteria: $scope.selectedTenderwithoutFormatting.preQualificationCriteria, 
		    								   preBidOpeningDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.preBidOpeningDate)),
		    								   tenderFee: $scope.selectedTenderwithoutFormatting.tenderFee, 
		    								   tenderPurchaseDueDate: new Date(formatDate($scope.selectedTenderwithoutFormatting.tenderPurchaseDueDate)),
		    								   bgIsAcceptableOrNot: $scope.selectedTenderwithoutFormatting.bgIsAcceptableOrNot, 
		    								   tenderSubmission: $scope.selectedTenderwithoutFormatting.tenderSubmission, 
		    								   paymentTerms: $scope.selectedTenderwithoutFormatting.paymentTerms, 
		    								   offerValidity: new Date(formatDate($scope.selectedTenderwithoutFormatting.offerValidity)), 
		    								   guaranteePeriod: $scope.selectedTenderwithoutFormatting.guaranteePeriod, 
		    								   deliveryPeriod: $scope.selectedTenderwithoutFormatting.deliveryPeriod, 
		    								   performanceGuarantee: $scope.selectedTenderwithoutFormatting.performanceGuarantee,
		    								   specialTermsAndCond: $scope.selectedTenderwithoutFormatting.specialTermsAndCond, 
		    								   specialDocsToAttach: $scope.selectedTenderwithoutFormatting.specialDocsToAttach, 
		    								   sheetPreparedBy: $scope.selectedTenderwithoutFormatting.sheetPreparedBy
		    						   }
		    				   }
		    	  			
		    	  		  }, function errorCallback(response) {
		    	  				
		    	  		  });
		   }
	   
	   function formatDate(date) {
		    var d = new Date(date),
		        month = '' + (d.getMonth() + 1),
		        day = '' + d.getDate(),
		        year = d.getFullYear();

		    if (month.length < 2) month = '0' + month;
		    if (day.length < 2) day = '0' + day;

		    return [year, month, day].join('-');
		}
	   
	   $scope.submitForm = function(selectedWork) {
		   
		   var data = $.param({
			   "tenderId" : selectedWork.tenderId,
               "id" : selectedWork.id,
               "nameOfCustomer" : selectedWork.nameOfCustomer,
               "scopeOfWork" : selectedWork.scopeOfWork,
               "workOrderStatus" : selectedWork.workOrderStatus,
               "workOrderNumber" : selectedWork.workOrderNumber,
               "workOrderDate" : formatDate(selectedWork.workOrderDate),
               "valueOfWork" : selectedWork.valueOfWork,
               "formalitiesCompleted" : selectedWork.formalitiesCompleted,
               "securityDepositBGAmount" : selectedWork.securityDepositBGAmount,
               "securityDepositBGDate" : formatDate(selectedWork.securityDepositBGDate),
               "validityOfSecurityDepositBG" : formatDate(selectedWork.validityOfSecurityDepositBG),
               "dateOfWorkCompletionAsPerWorkOrder" : formatDate(selectedWork.dateOfWorkCompletionAsPerWorkOrder),
               "dateOfInspection" : formatDate(selectedWork.dateOfInspection),
               "dateOfMaterialDelivery" : formatDate(selectedWork.dateOfMaterialDelivery),
               "dateOfWorkCompletion" : formatDate(selectedWork.dateOfWorkCompletion),
               "projectCompletedInTime" : selectedWork.projectCompletedInTime,
               "expensesMadeAsOnDate" : selectedWork.expensesMadeAsOnDate,
               "invoiceNumber" : selectedWork.invoiceNumber,
               "dateOfInvoice" : formatDate(selectedWork.dateOfInvoice),
               "dateOfReceiptOfPayment" : formatDate(selectedWork.dateOfReceiptOfPayment),
               "workCompletedInAllRespect" : selectedWork.workCompletedInAllRespect 

			   });
    
		   
	        $http({
    	  		  method: 'POST',
    	  		  url: '/work/update',
		          data    : data, //forms user object
		          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
    	  		}).then(function successCallback(response) {
    	  			alert("Work Successfully Updated !!");	
    	  			$location.path('/worksinprocess');
    	  		  }, function errorCallback(response) {
    	  			alert("Failed to Update !!");	
    	  		  });
	        
	        };
	        
		      //--- To Add Suppliers-------					        
	        
	        $scope.suppliers = [{tempid: 'choice1'}];

			        $( function (){
			    	  $http({
		    	  		  method: 'GET',
		    	  		  url: '/suppliers/getSuppliers/'+$scope.selectedWork.id,
				          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		    	  		}).then(function successCallback(response) {
		    	  			//alert("Tender Successfully Created !!");
		    	  			//$scope.parties.splice(index,1);
		    	  			//$location.path('/newtenders');
		    	  			$scope.suppliers = response.data;
		    	  		  }, function errorCallback(response) {
		    	  			//alert("Failed to Create !!");	
		    	  		  });
			        })			        	
	        	
	    	  
	        $scope.addNewSupplierChoice = function() {
	          var newItemNo = $scope.suppliers.length+1;
	          $scope.suppliers.push({'tempid':'choice'+newItemNo});
	        };
	        
	        $scope.saveAllSuppliers = function(suppliers) {
				      for (var i=0 ; i < suppliers.length ; i++) {
				    	  
			    		  if(typeof(suppliers[i].id) === "undefined" )
		    			  {
					    	  var data = $.param({
				    		  		"workId": $scope.selectedWork.id,
				    		  		"nameOfSupplier" : suppliers[i].nameOfSupplier,
				    		  		"addressOfSupplier" : suppliers[i].addressOfSupplier,
				    		  		"phoneNumber" : suppliers[i].phoneNumber,
				    		  		"email" : suppliers[i].email,
				    		  		"finalValueOfOrder" : suppliers[i].finalValueOfOrder,
				    		  		"paymentTerms" : suppliers[i].paymentTerms
							   });
		    			  }
			    		  else
				    		{
					    	  var data = $.param({
					    		  		"workId": $scope.selectedWork.id,
					    		  		"id" : suppliers[i].id,
					    		  		"nameOfSupplier" : suppliers[i].nameOfSupplier,
					    		  		"addressOfSupplier" : suppliers[i].addressOfSupplier,
					    		  		"phoneNumber" : suppliers[i].phoneNumber,
					    		  		"email" : suppliers[i].email,
					    		  		"finalValueOfOrder" : suppliers[i].finalValueOfOrder,
					    		  		"paymentTerms" : suppliers[i].paymentTerms
								   });
				    		}
				    	  
				    	  $http({
			    	  		  method: 'POST',
			    	  		  url: '/suppliers/addorupdate',
					          data    : data, //forms user object
					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
			    	  		}).then(function successCallback(response) {
			    	  			//alert("Tender Successfully Created !!");
			    	  			//$scope.parties.splice(index,1);
			    	  			//$location.path('/newtenders');
			    	  		  }, function errorCallback(response) {
			    	  			//alert("Failed to Create !!");	
			    	  		  });	
					}
				    // To Update  Contact Persons  
				      $route.reload();
		        };
	          
	        $scope.removeSupplierChoice = function(index,id) {
		        $http({
	    	  		  method: 'GET',
	    	  		  url: '/suppliers/delete/'+id,
			          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	    	  		}).then(function successCallback(response) {
	    	  			//alert("Tender Successfully Created !!");
	    	  			$scope.suppliers.splice(index,1);
	    	  			//$location.path('/newtenders');
	    	  		  }, function errorCallback(response) {
	    	  			//alert("Failed to Create !!");	
	    	  		  });				          
	        };
	        
	        $scope.removeSupplier = function(index) {
	        	$scope.suppliers.splice(index,1);
	        };
	        
	        //---- Add Suppliers ends here
	        
	        //--- To Add Payments-------					        
	        
	        $scope.payments = [{tempid: 'choice1'}];

			        $( function (){
			    	  $http({
		    	  		  method: 'GET',
		    	  		  url: '/payments/getpayments/'+$scope.selectedWork.id,
				          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		    	  		}).then(function successCallback(response) {
		    	  			//alert("Tender Successfully Created !!");
		    	  			//$scope.parties.splice(index,1);
		    	  			//$location.path('/newtenders');
		    	  			$scope.payments = [];
		    	  			$scope.unformattedpayments = response.data;
		    	  			if($scope.unformattedpayments !== null)
		    				   {
		    	  				 for(var i=0; i < $scope.unformattedpayments.length; i++ )
						    	  {
		    	  					$scope.payments[i] = {
		    	  							workId: $scope.unformattedpayments[i].workId,
						    		  		supplierId : $scope.unformattedpayments[i].supplierId,
						    		  		id : $scope.unformattedpayments[i].id,
						    		  		nameOfSupplier : $scope.unformattedpayments[i].nameOfSupplier,
						    		  		dateOfPayment : new Date(formatDate($scope.unformattedpayments[i].dateOfPayment)),
						    		  		natureOfExpense : $scope.unformattedpayments[i].natureOfExpense,
						    		  		amount : $scope.unformattedpayments[i].amount
		    	  					}
						    	  }
		    				   }
		    	  		  }, function errorCallback(response) {
		    	  			//alert("Failed to Create !!");	
		    	  		  });
			        })			        	
	        	
	    	  
	        $scope.addNewPaymentChoice = function() {
	          var newItemNo = $scope.payments.length+1;
	          $scope.payments.push({'tempid':'choice'+newItemNo});
	        };
	        
	        $scope.saveAllPayments = function(payments) {
				      for (var i=0 ; i < payments.length ; i++) {
				    	  
			    		  if(typeof(payments[i].id) === "undefined" )
		    			  {
					    	  var data = $.param({
				    		  		"workId": $scope.selectedWork.id,
				    		  		"supplierId" : payments[i].supplierId,
				    		  		"nameOfSupplier" : payments[i].nameOfSupplier,
				    		  		"dateOfPayment" : formatDate(payments[i].dateOfPayment),
				    		  		"natureOfExpense" : payments[i].natureOfExpense,
				    		  		"amount" : payments[i].amount
							   });
		    			  }
			    		  else
				    		{
					    	  var data = $.param({
					    		  		"workId": $scope.selectedWork.id,
					    		  		"supplierId" : payments[i].supplierId,
					    		  		"id" : payments[i].id,
					    		  		"nameOfSupplier" : payments[i].nameOfSupplier,
					    		  		"dateOfPayment" : formatDate(payments[i].dateOfPayment),
					    		  		"natureOfExpense" : payments[i].natureOfExpense,
					    		  		"amount" : payments[i].amount

								   });
				    		}
				    	  
				    	  $http({
			    	  		  method: 'POST',
			    	  		  url: '/payments/addorupdate',
					          data    : data, //forms user object
					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
			    	  		}).then(function successCallback(response) {
			    	  			//alert("Tender Successfully Created !!");
			    	  			//$scope.parties.splice(index,1);
			    	  			//$location.path('/newtenders');
			    	  		  }, function errorCallback(response) {
			    	  			//alert("Failed to Create !!");	
			    	  		  });	
					}
				    // To Update  Contact Persons  
				      $route.reload();
		        };
	          
	        $scope.removePaymentChoice = function(index,id) {
		        $http({
	    	  		  method: 'GET',
	    	  		  url: '/payments/delete/'+id,
			          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	    	  		}).then(function successCallback(response) {
	    	  			//alert("Tender Successfully Created !!");
	    	  			$scope.payments.splice(index,1);
	    	  			//$location.path('/newtenders');
	    	  		  }, function errorCallback(response) {
	    	  			//alert("Failed to Create !!");	
	    	  		  });				          
	        };
	        
	        $scope.removePayment = function(index) {
	        	$scope.payments.splice(index,1);
	        };
	        
	        //---- Add Payments ends here

	}]);  
	    
	  app.controller('homeCtrl', ['$scope','$http','$location', 'tenderService', function( $scope, $http, $location, tenderService) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedTender = tenderService.get();
		  
		  $scope.viewTenderDetails = function (item) {
			  tenderService.set(item),
			  $location.path('/tenderDetails');			 
		    };
		 
		 //Slick Grid Code

		    var dataView;
		    var dataViewWork;
		    var grid;
		    var gridWork;
		    var data = [];
		    var dataWork = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };
		    var columns = [
		                   { id: "id", name: "Tender ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 240, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 240, sortable: true },
		                   { id: "estimatedValue", name: "Estimated Value", field: "estimatedValue", width: 240, sortable: true },
		                   { id: "dueDate", name: "Due Date", field: "dueDate", width: 120, sortable: true },
		                   { id: "emd", name: "EMD", field: "emd", width: 100, sortable: true },
		                   { id: "interested", name: "Interested", field: "interested", width: 120, formatter: Slick.Formatters.YesNo, sortable: true }
		                 ];
		    var worksColumns = [
		                   { id: "tenderId", name: "Tender ID", field: "tenderId", width: 100, sortable: true },
		                   { id: "id", name: "Work ID", field: "id", width: 90, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 220, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 220, sortable: true },
		                   { id: "workOrderStatus", name: "Status", field: "workOrderStatus", width: 150, sortable: true },
		                   //{ id: "workOrderNumber", name: "Work Order Number", field: "workOrderNumber", width: 240, sortable: true },
		                   { id: "workOrderDate", name: "Date", field: "workOrderDate", width: 120, sortable: true },
		                   { id: "valueOfWork", name: "Value", field: "valueOfWork", width: 120, sortable: true },
		                   //{ id: "formalitiesCompleted", name: "Formalities Completed", field: "formalitiesCompleted", width: 240, sortable: true },
		                   //{ id: "securityDepositBGAmount", name: "SD BG Amount", field: "securityDepositBGAmount", width: 240, sortable: true },
		                   //{ id: "securityDepositBGDate", name: "SD BG Date", field: "securityDepositBGDate", width: 240, sortable: true },
		                   //{ id: "validityOfSecurityDepositBG", name: "Validity", field: "validityOfSecurityDepositBG", width: 240, sortable: true },
		                   //{ id: "dateOfWorkCompletionAsPerWorkOrder", name: "DOC Per WorkOrder", field: "dateOfWorkCompletionAsPerWorkOrder", width: 240, sortable: true },
		                   //{ id: "dateOfInspection", name: "Date of Inspection", field: "dateOfInspection", width: 240, sortable: true },
		                   //{ id: "dateOfMaterialDelivery", name: "Date Of Material Delivery", field: "dateOfMaterialDelivery", width: 240, sortable: true },
		                   //{ id: "dateOfWorkCompletion", name: "Date Of Work Completion", field: "dateOfWorkCompletion", width: 240, sortable: true },
		                   //{ id: "projectCompletedInTime", name: "Project Completed In Time", field: "projectCompletedInTime", width: 240, sortable: true },
		                   //{ id: "expensesMadeAsOnDate", name: "Expenses Made As On Date", field: "expensesMadeAsOnDate", width: 240, sortable: true },
		                   //{ id: "invoiceNumber", name: "Invoice Number", field: "invoiceNumber", width: 240, sortable: true },
		                   //{ id: "dateOfInvoice", name: "Date Of Invoice", field: "dateOfInvoice", width: 240, sortable: true },
		                   //{ id: "dateOfReceiptOfPayment", name: "Date Of Receipt Of Payment", field: "dateOfReceiptOfPayment", width: 240, sortable: true },
		                   { id: "workCompletedInAllRespect", name: "Work Completed", field: "workCompletedInAllRespect", width: 160,formatter: Slick.Formatters.YesNo, sortable: true }               
		                 ];
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }
		    
		    var columnFiltersWork = {};

		    function filterWork(item) {
		      for (var columnId in columnFiltersWork) {
		        if (columnId !== undefined && columnFiltersWork[columnId] !== "") {
		          var c = gridWork.getColumns()[gridWork.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFiltersWork[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }

		    $(function () {
		      $http({
		    	  method: 'GET',
		    	  url: '/tender/newtender/list'
		    	}).then(function successCallback(response) {
	    	  		dataView = new Slick.Data.DataView();
				      
				      grid = new Slick.Grid("#newTendersGrid", dataView, columns, options);
				      dataView.onRowCountChanged.subscribe(function (e, args) {
				        grid.updateRowCount();
				        grid.render();
				      });
				      dataView.onRowsChanged.subscribe(function (e, args) {
				        grid.invalidateRows(args.rows);
				        grid.render();
				      });
				      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
				        var columnId = $(this).data("columnId");
				        if (columnId != null) {
				          columnFilters[columnId] = $.trim($(this).val());
				          dataView.refresh();
				        }
				      });
				      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
				          $(args.node).empty();
				          $("<input type='text'>")
				             .data("columnId", args.column.id)
				             .val(columnFilters[args.column.id])
				             .appendTo(args.node);
				      });
				  		    
				      var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

				      
				      grid.onSort.subscribe(function (e, args) {
				    	  sortcol = args.sortCols[0].sortCol.field;
				    	  dataView.sort(comparer, args.sortCols[0].sortAsc);
				    	});

				    	function comparer(a, b) {
				    	  var x = a[sortcol], y = b[sortcol];
				    	  return (x == y ? 0 : (x > y ? 1 : -1));
				    	}
				      
				    	grid.init();
			    	    dataView.beginUpdate();
			    	    dataView.setItems(response.data);
			    	    dataView.setFilter(filter);
			    	    dataView.endUpdate();
		    	  }, function errorCallback(response) {
		    	    // called asynchronously if an error occurs
		    	    // or server returns response with an error status.
		    	  });
		      
		      $http({
		    	  method: 'GET',
		    	  url: '/work/inprocess/list'
		    	}).then(function successCallback(response) {
		    		dataViewWork = new Slick.Data.DataView();
				      
	    	  		gridWork = new Slick.Grid("#worksGrid", dataViewWork, worksColumns, options);
				      dataViewWork.onRowCountChanged.subscribe(function (e, args) {
				    	  gridWork.updateRowCount();
				    	  gridWork.render();
				      });
				      dataViewWork.onRowsChanged.subscribe(function (e, args) {
				    	  gridWork.invalidateRows(args.rows);
				    	  gridWork.render();
				      });
				      $(gridWork.getHeaderRow()).delegate(":input", "change keyup", function (e) {
				        var columnId = $(this).data("columnId");
				        if (columnId != null) {
				        	columnFiltersWork[columnId] = $.trim($(this).val());
				          dataViewWork.refresh();
				        }
				      });
				      gridWork.onHeaderRowCellRendered.subscribe(function(e, args) {
				          $(args.node).empty();
				          $("<input type='text'>")
				             .data("columnId", args.column.id)
				             .val(columnFiltersWork[args.column.id])
				             .appendTo(args.node);
				      });
				  		    
				      var pager1 = new Slick.Controls.Pager(dataViewWork, gridWork, $("#pager1"));

				      
				      gridWork.onSort.subscribe(function (e, args) {
				    	  sortcol = args.sortCols[0].sortCol.field;
				    	  dataViewWork.sort(comparer, args.sortCols[0].sortAsc);
				    	});

				    	function comparer(a, b) {
				    	  var x = a[sortcol], y = b[sortcol];
				    	  return (x == y ? 0 : (x > y ? 1 : -1));
				    	}
				      
				    	gridWork.init();
				    	dataViewWork.beginUpdate();
				    	dataViewWork.setItems(response.data);
				    	dataViewWork.setFilter(filterWork);
				    	dataViewWork.endUpdate();

		    	  }, function errorCallback(response) {
		    	    // called asynchronously if an error occurs
		    	    // or server returns response with an error status.
		    	  });
		      
		    })
		    //Slick Grid Ends
		    
	    }])	    	    

	  app.controller('tendersInProcessCtrl', ['$scope','$http','$route','$location', 'tenderService', function( $scope, $http, $route, $location, tenderService) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedTender = tenderService.get();
		  
		  $scope.viewTenderDetails = function (item) {
			  tenderService.set(item),
			  $location.path('/tenderDetails');			 
		    };
		 
		 //Slick Grid Code

		    var dataView;
		    var grid;
		    var data = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };
		    
		    function viewformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    function deleteformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }

		    var columns = [
		                   { id: "id", name: "Tender ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 220, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 220, sortable: true },
		                   { id: "estimatedValue", name: "Estimated Value", field: "estimatedValue", width: 150, sortable: true },
		                   //{ id: "dueDate", name: "Due Date", field: "dueDate", width: 120, sortable: true },
		                   //{ id: "emd", name: "EMD", field: "emd", width: 100, sortable: true },
		                   //{ id: "interested", name: "Interested", field: "interested", width: 120, formatter: Slick.Formatters.Checkmark, sortable: true },
		                   { id: "statusOfTender", name: "Status", field: "statusOfTender", width: 180, sortable: true },
		                   { id: "systemEnteredDate", name: "Entered Date", field: "systemEnteredDate", width: 130, sortable: true },
		                   //{ id: "tenderSubmitted", name: "Submitted", field: "tenderSubmitted", width: 240, sortable: true },
		                   //{ id: "submittedDate", name: "Submitted Date", field: "submittedDate", width: 240, sortable: true },
		                   //{ id: "technicalBidOpened", name: "Tech Bid Opened", field: "technicalBidOpened", width: 240, sortable: true },
		                   //{ id: "technicalBidOpeningDate", name: "Tech Bid Opening Date", field: "technicalBidOpeningDate", width: 280, sortable: true },
		                   { id: "technicallyQualified", name: "Tech Qualified", field: "technicallyQualified", width: 150, formatter: Slick.Formatters.YesNo, sortable: true },
		                   { id: "priceBidOpened", name: "Price Bid Opened", field: "priceBidOpened", width: 160,formatter: Slick.Formatters.YesNo, sortable: true },
		                   //{ id: "priceBidOpeningDate", name: "Price Bid Opening Date", field: "priceBidOpeningDate", width: 240, sortable: true },
		                   { id: "lowestBidder", name: "Lowest Bidder", field: "lowestBidder", width: 150, sortable: true },
		                   { id: "view", name: "Details", field: "view", width: 100, formatter: viewformatter},
		                   { id: "deleteTender", name: "Delete", field: "deleteTender", width: 100, formatter: deleteformatter}
		                 ];
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }

		      $.getJSON('/tender/inprocess/list', function(data) {

		    	  		dataView = new Slick.Data.DataView();
					      
					      grid = new Slick.Grid("#tendersInProcessGrid", dataView, columns, options);
					      dataView.onRowCountChanged.subscribe(function (e, args) {
					        grid.updateRowCount();
					        grid.render();
					      });
					      dataView.onRowsChanged.subscribe(function (e, args) {
					        grid.invalidateRows(args.rows);
					        grid.render();
					      });
					      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
					        var columnId = $(this).data("columnId");
					        if (columnId != null) {
					          columnFilters[columnId] = $.trim($(this).val());
					          dataView.refresh();
					        }
					      });
					      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
					          $(args.node).empty();
					          $("<input type='text'>")
					             .data("columnId", args.column.id)
					             .val(columnFilters[args.column.id])
					             .appendTo(args.node);
					      });
					  		    
					      var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

					      
					      grid.onSort.subscribe(function (e, args) {
					    	  sortcol = args.sortCols[0].sortCol.field;
					    	  dataView.sort(comparer, args.sortCols[0].sortAsc);
					    	});

					    	function comparer(a, b) {
					    	  var x = a[sortcol], y = b[sortcol];
					    	  return (x == y ? 0 : (x > y ? 1 : -1));
					    	}
					    	
						      var gridData = [];
						      
						      for(var i=0; i < data.length; i++ )
						    	  {
						    	  		gridData[i] = {
						    	  			id : data[i].id,
						    	  			nameOfCustomer : data[i].nameOfCustomer,
						    	  			scopeOfWork : data[i].scopeOfWork,
						    	  			estimatedValue : data[i].estimatedValue,
						    	  			dueDate : data[i].dueDate,
						    	  			emd : data[i].emd,
						    	  			interested : data[i].interested,
											statusOfTender: data[i].statusOfTender,
											systemEnteredDate: data[i].systemEnteredDate,
											tenderSubmitted: data[i].tenderSubmitted,
											submittedDate: data[i].submittedDate,
											technicalBidOpened: data[i].technicalBidOpened,
											technicalBidOpeningDate: data[i].technicalBidOpeningDate,
											technicallyQualified: data[i].technicallyQualified,
											priceBidOpened: data[i].priceBidOpened,
											priceBidOpeningDate: data[i].priceBidOpeningDate,
											lowestBidder: data[i].lowestBidder,
						    	  			view : "<a href='#/tenderDetails' class='viewButton' tabindex='0'>View</a>",
						    	  			deleteTender : "<a href='#/newtenders' class='deleteButton' tabindex='0'>Delete</a>"
						    	  		};
						    	  }
						      
						      grid.onClick.subscribe(function(e,args) {
						    	  	   var item = data[args.row]; //args.grid.getDataItem(args.row);
						    	  	 if (args.cell == grid.getColumnIndex('view'))
						    		   $scope.viewTenderDetails(item);
						    	  	 
						    	  	 if (args.cell == grid.getColumnIndex('deleteTender'))
						    	  		 {
						    	  		$http({
						    	  		  method: 'GET',
						    	  		  url: '/tender/delete/'+item.id
						    	  		}).then(function successCallback(response) {
						    	  			alert("Tender Successfully Deleted !!");	
						    	  			$route.reload();
						    	  		  }, function errorCallback(response) {
						    	  			alert("Failed to Delete !!");	
						    	  		  });
						    	  		 }
						    	});

					      
					    	grid.init();
				    	    dataView.beginUpdate();
				    	    dataView.setItems(gridData);
				    	    dataView.setFilter(filter);
				    	    dataView.endUpdate();

		    });
		    //Slick Grid Ends
		    
	    }])	    	    

app.controller('tendersDisqualifiedCtrl', ['$scope','$http', '$route','$location', 'tenderService', function( $scope, $http, $route, $location, tenderService) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedTender = tenderService.get();
		  
		  $scope.viewTenderDetails = function (item) {
			  tenderService.set(item),
			  $location.path('/tenderDetails');			 
		    };
		 
		 //Slick Grid Code

		    var dataView;
		    var grid;
		    var data = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };
		    
		    function viewformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    function deleteformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }

		    var columns = [
		                   { id: "id", name: "Tender ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 240, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 240, sortable: true },
		                  /* { id: "estimatedValue", name: "Estimated Value", field: "estimatedValue", width: 240, sortable: true },
		                   { id: "dueDate", name: "Due Date", field: "dueDate", width: 120, sortable: true },
		                   { id: "emd", name: "EMD", field: "emd", width: 100, sortable: true },
		                   { id: "interested", name: "Interested", field: "interested", width: 120, formatter: Slick.Formatters.Checkmark, sortable: true },
		                   { id: "statusOfTender", name: "Status", field: "statusOfTender", width: 240, sortable: true },
		                   { id: "systemEnteredDate", name: "Entered Date", field: "systemEnteredDate", width: 240, sortable: true },
		                   { id: "tenderSubmitted", name: "Submitted", field: "tenderSubmitted", width: 240, sortable: true },
		                   { id: "submittedDate", name: "Submitted Date", field: "submittedDate", width: 240, sortable: true },
		                   { id: "technicalBidOpened", name: "Tech Bid Opened", field: "technicalBidOpened", width: 240, sortable: true },
		                   { id: "technicalBidOpeningDate", name: "Tech Bid Opening Date", field: "technicalBidOpeningDate", width: 280, sortable: true },
		                   { id: "technicallyQualified", name: "Tech Qualified", field: "technicallyQualified", width: 240, sortable: true },
		                   { id: "priceBidOpened", name: "Price Bid Opened", field: "priceBidOpened", width: 240, sortable: true },
		                   { id: "priceBidOpeningDate", name: "Price Bid Opening Date", field: "priceBidOpeningDate", width: 240, sortable: true },
		                   { id: "lowestBidder", name: "Lowest Bidder", field: "lowestBidder", width: 240, sortable: true },*/
		                   { id: "view", name: "Details", field: "view", width: 120, formatter: viewformatter},
		                   { id: "deleteTender", name: "Delete", field: "deleteTender", width: 120, formatter: deleteformatter}
		                 ];
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }

		      $.getJSON('/tender/disqualified/list', function(data) {

		    	  		dataView = new Slick.Data.DataView();
					      
					      grid = new Slick.Grid("#tendersDisqualifiedGrid", dataView, columns, options);
					      dataView.onRowCountChanged.subscribe(function (e, args) {
					        grid.updateRowCount();
					        grid.render();
					      });
					      dataView.onRowsChanged.subscribe(function (e, args) {
					        grid.invalidateRows(args.rows);
					        grid.render();
					      });
					      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
					        var columnId = $(this).data("columnId");
					        if (columnId != null) {
					          columnFilters[columnId] = $.trim($(this).val());
					          dataView.refresh();
					        }
					      });
					      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
					          $(args.node).empty();
					          $("<input type='text'>")
					             .data("columnId", args.column.id)
					             .val(columnFilters[args.column.id])
					             .appendTo(args.node);
					      });
					  		    
					      var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

					      
					      grid.onSort.subscribe(function (e, args) {
					    	  sortcol = args.sortCols[0].sortCol.field;
					    	  dataView.sort(comparer, args.sortCols[0].sortAsc);
					    	});

					    	function comparer(a, b) {
					    	  var x = a[sortcol], y = b[sortcol];
					    	  return (x == y ? 0 : (x > y ? 1 : -1));
					    	}
					    	
						      var gridData = [];
						      
						      for(var i=0; i < data.length; i++ )
						    	  {
						    	  		gridData[i] = {
						    	  			id : data[i].id,
						    	  			nameOfCustomer : data[i].nameOfCustomer,
						    	  			scopeOfWork : data[i].scopeOfWork,
/*						    	  			estimatedValue : data[i].estimatedValue,
						    	  			dueDate : data[i].dueDate,
						    	  			emd : data[i].emd,
						    	  			interested : data[i].interested,
											statusOfTender: data[i].statusOfTender,
											systemEnteredDate: data[i].systemEnteredDate,
											tenderSubmitted: data[i].tenderSubmitted,
											submittedDate: data[i].submittedDate,
											technicalBidOpened: data[i].technicalBidOpened,
											technicalBidOpeningDate: data[i].technicalBidOpeningDate,
											technicallyQualified: data[i].technicallyQualified,
											priceBidOpened: data[i].priceBidOpened,
											priceBidOpeningDate: data[i].priceBidOpeningDate,
											lowestBidder: data[i].lowestBidder,*/
						    	  			view : "<a href='#/tenderDetails' class='viewButton' tabindex='0'>View</a>",
						    	  			deleteTender : "<a href='#/tendersdisqualified' class='deleteButton' tabindex='0'>Delete</a>"
						    	  		};
						    	  }
						      
						      grid.onClick.subscribe(function(e,args) {
						    	  	   var item = data[args.row]; //args.grid.getDataItem(args.row);
						    	  	 if (args.cell == grid.getColumnIndex('view'))
						    		   $scope.viewTenderDetails(item);
						    	  	 
						    	  	 if (args.cell == grid.getColumnIndex('deleteTender'))
						    	  		 {
						    	  		$http({
						    	  		  method: 'GET',
						    	  		  url: '/tender/delete/'+item.id
						    	  		}).then(function successCallback(response) {
						    	  			alert("Tender Successfully Deleted !!");	
						    	  			$route.reload();
						    	  		  }, function errorCallback(response) {
						    	  			alert("Failed to Delete !!");	
						    	  		  });
						    	  		 }
						    	});

					      
					    	grid.init();
				    	    dataView.beginUpdate();
				    	    dataView.setItems(gridData);
				    	    dataView.setFilter(filter);
				    	    dataView.endUpdate();

		    });
		    //Slick Grid Ends
		    
	    }])	 
	    
	  app.controller('worksCtrl', ['$scope','$http', '$route','$location', 'workService', function( $scope, $http, $route, $location, workService) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedWork = workService.get();
		  
		  $scope.viewWorkDetails = function (item) {
			  workService.set(item),
			  $location.path('/workDetails');			 
		    };
		 
		 //Slick Grid Code

		    var dataViewWork;
		    var grid;
		    var dataWork = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };


		    
		    function viewformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    function deleteformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    
		    var worksColumns = [
		                   { id: "tenderId", name: "Tender ID", field: "tenderId", width: 100, sortable: true },
		                   { id: "id", name: "Work ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 220, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 220, sortable: true },
		                   { id: "workOrderStatus", name: "Status", field: "workOrderStatus", width: 180, sortable: true },
		                   //{ id: "workOrderNumber", name: "Work Order Number", field: "workOrderNumber", width: 240, sortable: true },
		                   { id: "workOrderDate", name: "Date", field: "workOrderDate", width: 120, sortable: true },
		                   { id: "valueOfWork", name: "Value", field: "valueOfWork", width: 120, sortable: true },
		                   //{ id: "formalitiesCompleted", name: "Formalities Completed", field: "formalitiesCompleted", width: 240, sortable: true },
		                   //{ id: "securityDepositBGAmount", name: "SD BG Amount", field: "securityDepositBGAmount", width: 240, sortable: true },
		                   //{ id: "securityDepositBGDate", name: "SD BG Date", field: "securityDepositBGDate", width: 240, sortable: true },
		                   //{ id: "validityOfSecurityDepositBG", name: "Validity", field: "validityOfSecurityDepositBG", width: 240, sortable: true },
		                   //{ id: "dateOfWorkCompletionAsPerWorkOrder", name: "DOC Per WorkOrder", field: "dateOfWorkCompletionAsPerWorkOrder", width: 240, sortable: true },
		                   //{ id: "dateOfInspection", name: "Date of Inspection", field: "dateOfInspection", width: 240, sortable: true },
		                   //{ id: "dateOfMaterialDelivery", name: "Date Of Material Delivery", field: "dateOfMaterialDelivery", width: 240, sortable: true },
		                   //{ id: "dateOfWorkCompletion", name: "Date Of Work Completion", field: "dateOfWorkCompletion", width: 240, sortable: true },
		                   //{ id: "projectCompletedInTime", name: "Project Completed In Time", field: "projectCompletedInTime", width: 240, sortable: true },
		                   //{ id: "expensesMadeAsOnDate", name: "Expenses Made As On Date", field: "expensesMadeAsOnDate", width: 240, sortable: true },
		                   //{ id: "invoiceNumber", name: "Invoice Number", field: "invoiceNumber", width: 240, sortable: true },
		                   //{ id: "dateOfInvoice", name: "Date Of Invoice", field: "dateOfInvoice", width: 240, sortable: true },
		                   //{ id: "dateOfReceiptOfPayment", name: "Date Of Receipt Of Payment", field: "dateOfReceiptOfPayment", width: 240, sortable: true },
		                   { id: "workCompletedInAllRespect", name: "Work Completed", field: "workCompletedInAllRespect", width: 160, formatter: Slick.Formatters.YesNo, sortable: true },
		                   { id: "view", name: "Details", field: "view", width: 100, formatter: viewformatter},
		                   { id: "deleteWork", name: "Delete", field: "deleteWork", width: 100, formatter: deleteformatter}
		                 ];

		    
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }
		    
	      $.getJSON('/work/inprocess/list', function(dataWork) {

	    	  		dataViewWork = new Slick.Data.DataView();
				      
	    	  		grid = new Slick.Grid("#worksGrid", dataViewWork, worksColumns, options);
				      dataViewWork.onRowCountChanged.subscribe(function (e, args) {
				    	  grid.updateRowCount();
				    	  grid.render();
				      });
				      dataViewWork.onRowsChanged.subscribe(function (e, args) {
				    	  grid.invalidateRows(args.rows);
				    	  grid.render();
				      });
				      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
				        var columnId = $(this).data("columnId");
				        if (columnId != null) {
				        	columnFilters[columnId] = $.trim($(this).val());
				          dataViewWork.refresh();
				        }
				      });
				      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
				          $(args.node).empty();
				          $("<input type='text'>")
				             .data("columnId", args.column.id)
				             .val(columnFilters[args.column.id])
				             .appendTo(args.node);
				      });
				  		    
				      var pager = new Slick.Controls.Pager(dataViewWork, grid, $("#pager"));

				      
				      grid.onSort.subscribe(function (e, args) {
				    	  sortcol = args.sortCols[0].sortCol.field;
				    	  dataViewWork.sort(comparer, args.sortCols[0].sortAsc);
				    	});

				    	function comparer(a, b) {
				    	  var x = a[sortcol], y = b[sortcol];
				    	  return (x == y ? 0 : (x > y ? 1 : -1));
				    	}
				      
				    	var gridWorkData = [];
					      
					      for(var i=0; i < dataWork.length; i++ )
					    	  {
					    	  gridWorkData[i] = {
					    	  			tenderId : dataWork[i].tenderId,
					    	  			id: dataWork[i].id,
					    	  			nameOfCustomer : dataWork[i].nameOfCustomer,
					    	  			scopeOfWork : dataWork[i].scopeOfWork,
					    	  			workOrderStatus : dataWork[i].workOrderStatus, 
					    	  			workOrderNumber : dataWork[i].workOrderNumber,
					    	  			workOrderDate : dataWork[i].workOrderDate,
					    	  			valueOfWork : dataWork[i].valueOfWork,
					    	  			formalitiesCompleted : dataWork[i].formalitiesCompleted,
					    	  			securityDepositBGAmount : dataWork[i].securityDepositBGAmount, 
					    	  			securityDepositBGDate : dataWork[i].securityDepositBGDate,
					    	  			validityOfSecurityDepositBG : dataWork[i].validityOfSecurityDepositBG,
					    	  			dateOfWorkCompletionAsPerWorkOrder : dataWork[i].dateOfWorkCompletionAsPerWorkOrder,
					    	  			dateOfInspection : dataWork[i].dateOfInspection,
					    	  			dateOfMaterialDelivery : dataWork[i].dateOfMaterialDelivery,
					    	  			dateOfWorkCompletion : dataWork[i].dateOfWorkCompletion,
					    	  			projectCompletedInTime : dataWork[i].projectCompletedInTime, 
					    	  			expensesMadeAsOnDate : dataWork[i].expensesMadeAsOnDate,
					    	  			invoiceNumber : dataWork[i].invoiceNumber,
					    	  			dateOfInvoice : dataWork[i].dateOfInvoice,
					    	  			dateOfReceiptOfPayment : dataWork[i].dateOfReceiptOfPayment,
					    	  			workCompletedInAllRespect : dataWork[i].workCompletedInAllRespect,
					    	  			view : "<a href='#/workDetails' class='viewButton' tabindex='0'>View</a>",
					    	  			deleteWork : "<a href='#/worksinprocess' class='deleteButton' tabindex='0'>Delete</a>"
					    	  		};
					    	  }
					      
					      grid.onClick.subscribe(function(e,args) {
					    	  	   var item = dataWork[args.row]; //args.grid.getDataItem(args.row);
					    	  	 if (args.cell == grid.getColumnIndex('view'))
					    		   $scope.viewWorkDetails(item);
					    	  	 
					    	  	 if (args.cell == grid.getColumnIndex('deleteWork'))
					    	  		 {
					    	  		$http({
					    	  		  method: 'GET',
					    	  		  url: '/work/delete/'+item.id
					    	  		}).then(function successCallback(response) {
					    	  			alert("Work Successfully Deleted !!");	
					    	  			$route.reload();
					    	  		  }, function errorCallback(response) {
					    	  			alert("Failed to Delete !!");	
					    	  		  });
					    	  		 }
					    	});

				    	
				    	grid.init();
				    	dataViewWork.beginUpdate();
				    	dataViewWork.setItems(gridWorkData);
				    	dataViewWork.setFilter(filter);
				    	dataViewWork.endUpdate();

	    });
		    //Slick Grid Ends
		    
	    }])	    	    
	    
	app.controller('worksCompletedCtrl', ['$scope','$http', '$route','$location', 'workService', function( $scope, $http, $route, $location, workService) {

		  $scope.exportTendersData = function() {		         
		                 alasql('SELECT * INTO XLSX("TendersDataExport.xlsx",{headers:true}) FROM ?',[$scope.collection]);		        
		  };
		  
		  $scope.selectedWork = workService.get();
		  
		  $scope.viewWorkDetails = function (item) {
			  workService.set(item),
			  $location.path('/workDetails');			 
		    };
		 
		 //Slick Grid Code

		    var dataViewWork;
		    var grid;
		    var dataWork = [];
		   
		    var options = {
		      enableCellNavigation: true,
		      showHeaderRow: true,
		      headerRowHeight: 40,
		      multiColumnSort: true,
		      explicitInitialization: true
		    },
		    indices, isAsc = true, currentSortCol = { id: "title" };
		    
		    function viewformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }
		    
		    function deleteformatter(row, cell, value, columnDef, dataContext) {
		        return value;
		    }

		    var worksColumns = [
		                   { id: "tenderId", name: "Tender ID", field: "tenderId", width: 100, sortable: true },
		                   { id: "id", name: "Work ID", field: "id", width: 100, sortable: true },
		                   { id: "nameOfCustomer", name: "Name Of Customer", field: "nameOfCustomer", width: 220, sortable: true },
		                   { id: "scopeOfWork", name: "Scope of Work", field: "scopeOfWork", width: 220, sortable: true },
		                   //{ id: "workOrderStatus", name: "Status", field: "workOrderStatus", width: 240, sortable: true },
		                   //{ id: "workOrderNumber", name: "Work Order Number", field: "workOrderNumber", width: 240, sortable: true },
		                   //{ id: "workOrderDate", name: "Date", field: "workOrderDate", width: 100, sortable: true },
		                   { id: "valueOfWork", name: "Value", field: "valueOfWork", width: 120, sortable: true },
		                   //{ id: "formalitiesCompleted", name: "Formalities Completed", field: "formalitiesCompleted", width: 240, sortable: true },
		                   //{ id: "securityDepositBGAmount", name: "SD BG Amount", field: "securityDepositBGAmount", width: 240, sortable: true },
		                   //{ id: "securityDepositBGDate", name: "SD BG Date", field: "securityDepositBGDate", width: 240, sortable: true },
		                   //{ id: "validityOfSecurityDepositBG", name: "Validity", field: "validityOfSecurityDepositBG", width: 240, sortable: true },
		                   //{ id: "dateOfWorkCompletionAsPerWorkOrder", name: "DOC Per WorkOrder", field: "dateOfWorkCompletionAsPerWorkOrder", width: 240, sortable: true },
		                   //{ id: "dateOfInspection", name: "Date of Inspection", field: "dateOfInspection", width: 240, sortable: true },
		                   //{ id: "dateOfMaterialDelivery", name: "Date Of Material Delivery", field: "dateOfMaterialDelivery", width: 240, sortable: true },
		                   { id: "dateOfWorkCompletion", name: "Date Of Work Completion", field: "dateOfWorkCompletion", width: 230, sortable: true },
		                   //{ id: "projectCompletedInTime", name: "Project Completed In Time", field: "projectCompletedInTime", width: 240, sortable: true },
		                   //{ id: "expensesMadeAsOnDate", name: "Expenses Made As On Date", field: "expensesMadeAsOnDate", width: 240, sortable: true },
		                   //{ id: "invoiceNumber", name: "Invoice Number", field: "invoiceNumber", width: 240, sortable: true },
		                   //{ id: "dateOfInvoice", name: "Date Of Invoice", field: "dateOfInvoice", width: 240, sortable: true },
		                   //{ id: "dateOfReceiptOfPayment", name: "Date Of Receipt Of Payment", field: "dateOfReceiptOfPayment", width: 240, sortable: true },
		                   //{ id: "workCompletedInAllRespect", name: "Work Completed", field: "workCompletedInAllRespect", width: 240, sortable: true }
		                   { id: "view", name: "Details", field: "view", width: 100, formatter: viewformatter},
		                   { id: "deleteWork", name: "Delete", field: "deleteWork", width: 100, formatter: deleteformatter}
		                 ];

		    
		    var columnFilters = {};

		    function filter(item) {
		      for (var columnId in columnFilters) {
		        if (columnId !== undefined && columnFilters[columnId] !== "") {
		          var c = grid.getColumns()[grid.getColumnIndex(columnId)];
		          if ( ! (item[c.field].toString().toLowerCase().indexOf(columnFilters[columnId].toString().toLowerCase())  > -1 ) ) {
		            return false;
		          }
		        }
		      }
		      return true;
		    }
		    
	      $.getJSON('/work/completed/list', function(dataWork) {

	    	  		dataViewWork = new Slick.Data.DataView();
				      
	    	  		grid = new Slick.Grid("#worksCompletedGrid", dataViewWork, worksColumns, options);
				      dataViewWork.onRowCountChanged.subscribe(function (e, args) {
				    	  grid.updateRowCount();
				    	  grid.render();
				      });
				      dataViewWork.onRowsChanged.subscribe(function (e, args) {
				    	  grid.invalidateRows(args.rows);
				    	  grid.render();
				      });
				      $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
				        var columnId = $(this).data("columnId");
				        if (columnId != null) {
				        	columnFilters[columnId] = $.trim($(this).val());
				          dataViewWork.refresh();
				        }
				      });
				      grid.onHeaderRowCellRendered.subscribe(function(e, args) {
				          $(args.node).empty();
				          $("<input type='text'>")
				             .data("columnId", args.column.id)
				             .val(columnFilters[args.column.id])
				             .appendTo(args.node);
				      });
				  		    
				      var pager = new Slick.Controls.Pager(dataViewWork, grid, $("#pager"));

				      
				      grid.onSort.subscribe(function (e, args) {
				    	  sortcol = args.sortCols[0].sortCol.field;
				    	  dataViewWork.sort(comparer, args.sortCols[0].sortAsc);
				    	});

				    	function comparer(a, b) {
				    	  var x = a[sortcol], y = b[sortcol];
				    	  return (x == y ? 0 : (x > y ? 1 : -1));
				    	}
				    	
				    	var gridWorkData = [];
					      
					      for(var i=0; i < dataWork.length; i++ )
					    	  {
					    	  gridWorkData[i] = {
					    	  			tenderId : dataWork[i].tenderId,
					    	  			id: dataWork[i].id,
					    	  			nameOfCustomer : dataWork[i].nameOfCustomer,
					    	  			scopeOfWork : dataWork[i].scopeOfWork,
					    	  			workOrderStatus : dataWork[i].workOrderStatus, 
					    	  			workOrderNumber : dataWork[i].workOrderNumber,
					    	  			workOrderDate : dataWork[i].workOrderDate,
					    	  			valueOfWork : dataWork[i].valueOfWork,
					    	  			formalitiesCompleted : dataWork[i].formalitiesCompleted,
					    	  			securityDepositBGAmount : dataWork[i].securityDepositBGAmount, 
					    	  			securityDepositBGDate : dataWork[i].securityDepositBGDate,
					    	  			validityOfSecurityDepositBG : dataWork[i].validityOfSecurityDepositBG,
					    	  			dateOfWorkCompletionAsPerWorkOrder : dataWork[i].dateOfWorkCompletionAsPerWorkOrder,
					    	  			dateOfInspection : dataWork[i].dateOfInspection,
					    	  			dateOfMaterialDelivery : dataWork[i].dateOfMaterialDelivery,
					    	  			dateOfWorkCompletion : dataWork[i].dateOfWorkCompletion,
					    	  			projectCompletedInTime : dataWork[i].projectCompletedInTime, 
					    	  			expensesMadeAsOnDate : dataWork[i].expensesMadeAsOnDate,
					    	  			invoiceNumber : dataWork[i].invoiceNumber,
					    	  			dateOfInvoice : dataWork[i].dateOfInvoice,
					    	  			dateOfReceiptOfPayment : dataWork[i].dateOfReceiptOfPayment,
					    	  			workCompletedInAllRespect : dataWork[i].workCompletedInAllRespect,
					    	  			view : "<a href='#/workDetails' class='viewButton' tabindex='0'>View</a>",
					    	  			deleteWork : "<a href='#/workscompleted' class='deleteButton' tabindex='0'>Delete</a>"
					    	  		};
					    	  }
					      
					      grid.onClick.subscribe(function(e,args) {
					    	  	   var item = dataWork[args.row]; //args.grid.getDataItem(args.row);
					    	  	 if (args.cell == grid.getColumnIndex('view'))
					    		   $scope.viewWorkDetails(item);
					    	  	 
					    	  	 if (args.cell == grid.getColumnIndex('deleteWork'))
					    	  		 {
					    	  		$http({
					    	  		  method: 'GET',
					    	  		  url: '/work/delete/'+item.id
					    	  		}).then(function successCallback(response) {
					    	  			alert("Work Successfully Deleted !!");	
					    	  			$route.reload();
					    	  		  }, function errorCallback(response) {
					    	  			alert("Failed to Delete !!");	
					    	  		  });
					    	  		 }
					    	});

				      
				    	grid.init();
				    	dataViewWork.beginUpdate();
				    	dataViewWork.setItems(gridWorkData);
				    	dataViewWork.setFilter(filter);
				    	dataViewWork.endUpdate();

	    });
		    //Slick Grid Ends
		    
	    }])	    	    
	    
app.controller('analysisCtrl', ['$scope','$http','$location', 'tenderService','$route', function( $scope, $http, $location, tenderService, $route) {
	
    $( function (){
  	  $http({
	  		  method: 'GET',
	  		  url: '/anaylsis/getAnaylsis',
	          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	  		}).then(function successCallback(response) {
	  			$scope.details = response.data;
	  			
	  			//----------------First Chart Begions---------
	  			$(function () {
	  			    // Create the chart
	  			    $('#container').highcharts({
	  			        chart: {
	  			            type: 'column'
	  			        },
		  			      credits: {
		  			        enabled: false
		  			    },
	  			        title: {
	  			            text: 'All Tenders Vs Tenders Submitted'
	  			        },
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'Total Count'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y}'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Count<br/>'
	  			        },

	  			        series: [{
	  			            name: "Tenders",
	  			            colorByPoint: true,
	  			            data: [{
	  			                name: "All Tenders",
	  			                y: $scope.details.AllTendersCount + $scope.details.AllWorkCount,
	  			                color: '#cc5100'
	  			            }, {
	  			                name: "Tenders Submitted",
	  			                y: $scope.details.AllTendersCount + $scope.details.AllWorkCount - $scope.details.NewTenderCount,
	  			                color: '#48d148'
	  			            }]
	  			        }]
	  			    });
	  			});
	  			
	  			//------ First Chart Ends-----
	  			
	  			//------Second chart begions-----
	  			
	  			$(function () {
	  			    // Create the chart
	  			    $('#container1').highcharts({
	  			        chart: {
	  			            type: 'column'
	  			        },
		  			      credits: {
		  			        enabled: false
		  			    },
	  			        title: {
	  			            text: 'Tenders Submitted Vs Technically Qualified'
	  			        },
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'Total Count'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y}'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Count<br/>'
	  			        },

	  			        series: [{
	  			            name: "Tenders",
	  			            colorByPoint: true,
	  			            data: [{
	  			                name: "Tenders Submitted",
	  			                y: $scope.details.InProcessTenderCount + $scope.details.DisQualifiedTenderCount + $scope.details.AllWorkCount,
	  			                color: '#cc5100'	  			                
	  			            }, {
	  			                name: "Technically Qualified",
	  			                y: $scope.details.InProcessTenderCount + $scope.details.AllWorkCount,
	  			                color: '#48d148'
	  			            }]
	  			        }]
	  			    });
	  			});
	  			
	  			//----Second chart ends--------
	  			
	  			//------Third chart begions-----
	  			
	  			$(function () {
	  			    // Create the chart
	  			    $('#container2').highcharts({
	  			        chart: {
	  			            type: 'column'
	  			        },
		  			      credits: {
		  			        enabled: false
		  			    },
	  			        title: {
	  			            text: 'Tenders Submitted Vs Tenders Found with lowest Rates'
	  			        },
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'Total Count'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y}'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Count<br/>'
	  			        },

	  			        series: [{
	  			            name: "Tenders",
	  			            colorByPoint: true,
	  			            data: [{
	  			                name: "Tenders Submitted",
	  			                y: $scope.details.InProcessTenderCount + $scope.details.DisQualifiedTenderCount + $scope.details.AllWorkCount,
	  			                color: '#cc5100'	  			                
	  			            }, {
	  			                name: "Tenders Found with lowest Rates",
	  			                y: $scope.details.AllWorkCount,
	  			                color: '#48d148'
	  			            }]
	  			        }]
	  			    });
	  			});
	  			
	  			//----Third chart ends--------
	  			
	  			//------Fourth chart begions-----
	  			
	  			$(function () {
	  			    // Create the chart
	  			    $('#container3').highcharts({
	  			        chart: {
	  			            type: 'column'
	  			        },
		  			      credits: {
		  			        enabled: false
		  			    },
	  			        title: {
	  			            text: 'All Works Vs Works Completed Vs In Process Works'
	  			        },
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'Total Count'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y}'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Count<br/>'
	  			        },

	  			        series: [{
	  			            name: "Works",
	  			            colorByPoint: true,
	  			            data: [{
	  			                name: "All Works",
	  			                y: $scope.details.AllWorkCount,
	  			                color: '#cc5100'	  			                
	  			            }, {
	  			                name: "Works Commpleted",
	  			                y: $scope.details.workCompletedCount,
	  			                color: '#48d148'
	  			            },
	  			           {
	  			                name: "In Process Works",
	  			                y: $scope.details.InProcessWork,
	  			                color: '#ff9900'
	  			            }]
	  			        }]
	  			    });
	  			});
	  			
	  			//----Fourth chart ends--------
	  			
	  			//------Fifth chart begions-----
	  			
	  			$(function () {
	  			    // Create the chart
	  			    $('#container4').highcharts({
	  			        chart: {
	  			            type: 'column'
	  			        },
		  			      credits: {
		  			        enabled: false
		  			    },
	  			        title: {
	  			            text: 'Tenders Analysis Till Now'
	  			        },
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'Total Count'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y}'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Count<br/>'
	  			        },

	  			        series: [{
	  			            name: "Tenders",
	  			            colorByPoint: true,
	  			            data: [{
	  			                name: "All Tenders Till Now",
	  			                y: $scope.details.AllWorkCount + $scope.details.AllTendersCount,
	  			                color: '#cc5100'	  			                
	  			            }, {
	  			                name: "New Tenders",
	  			                y: $scope.details.NewTenderCount,
	  			                color: '#ffff33'
	  			            },
	  			           {
	  			                name: "Tenders In process",
	  			                y: $scope.details.InProcessTenderCount,
	  			                color: '#ff9900'
	  			            },
	  			          {
	  			                name: "Tenders Completed",
	  			                y: $scope.details.AllWorkCount,
	  			                color: '#48d148'
	  			            },
	  			           {
	  			                name: "Disqualified Tenders",
	  			                y: $scope.details.DisQualifiedTenderCount,
	  			                color: '#ff0000'
	  			            }]
	  			        }]
	  			    });
	  			});
	  			
	  			//----Fifth chart ends--------
	  			
	  		  }, function errorCallback(response) {

	  		  });
      })

	
	
}]);
	    
app.directive('ngConfirmClick', [
                                  function(){
                                      return {
                                          link: function (scope, element, attr) {
                                              var msg = attr.ngConfirmClick || "Are you sure?";
                                              var clickAction = attr.confirmedClick;
                                              element.bind('click',function (event) {
                                                  if ( window.confirm(msg) ) {
                                                      scope.$eval(clickAction)
                                                  }
                                              });
                                          }
                                      };
                              }])
                              
 app.directive('dbinfOnFilesSelected', [function() {
	    return {
	        restrict: 'A',
	        scope: {
	              //attribute data-dbinf-on-files-selected (normalized to dbinfOnFilesSelected) identifies the action
	              //to take when file(s) are selected. The '&' says to  execute the expression for attribute
	              //data-dbinf-on-files-selected in the context of the parent scope. Note though that this '&'
	              //concerns visibility of the properties and functions of the parent scope, it does not
	              //fire the parent scope's $digest (dirty checking): use $scope.$apply() to update views
	              //(calling scope.$apply() here in the directive had no visible effect for me).
	            dbinfOnFilesSelected: '&'
	        },
	        link: function(scope, element, attr, ctrl) {
	            element.bind("change", function()
	            {  //match the selected files to the name 'selectedFileList', and
	               //execute the code in the data-dbinf-on-files-selected attribute
	             scope.dbinfOnFilesSelected({selectedFileList : element[0].files});
	            });
	        }
	    }
	}]);