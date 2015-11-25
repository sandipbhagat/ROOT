<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <link rel="stylesheet" href="../assets/css/smoothness/jquery-ui-1.8.16.custom.css" type="text/css"/>
  <link rel="stylesheet" href="../assets/slick.grid.css" type="text/css"/>
  <link rel="stylesheet" href="../assets/controls/slick.pager.css" type="text/css"/>
  <link rel="stylesheet" href="examples.css" type="text/css"/>
  <link rel="stylesheet" href="../assets/controls/slick.columnpicker.css" type="text/css"/>
  <style>
    .slick-headerrow-column {
      background: #87ceeb;
      text-overflow: clip;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .slick-headerrow-column input {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
<div style="position:relative">
  <div style="width:600px;">
    <div id="myGrid" style="width:100%;height:500px;"></div>
    <div id="pager" style="width:100%;height:20px;"></div>
  </div>
</div>

<script src="../assets/lib/firebugx.js"></script>

<script src="../assets/lib/jquery-1.7.min.js"></script>
<script src="../assets/lib/jquery-ui-1.8.16.custom.min.js"></script>
<script src="../assets/lib/jquery.event.drag-2.2.js"></script>

<script src="../assets/slick.core.js"></script>
<script src="../assets/slick.formatters.js"></script>
<script src="../assets/slick.editors.js"></script>
<script src="../assets/plugins/slick.cellrangedecorator.js"></script>
<script src="../assets/plugins/slick.cellrangeselector.js"></script>
<script src="../assets/plugins/slick.cellselectionmodel.js"></script>
<script src="../assets/slick.dataview.js"></script>
<script src="../assets/slick.grid.js"></script>
<script src="../assets/controls/slick.pager.js"></script>
<script src="../assets/controls/slick.columnpicker.js"></script>

<script>
  var dataView;
  var grid;
  var data = [];
 
  var options = {
    enableCellNavigation: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    multiColumnSort: true,
    explicitInitialization: true
  },
  indices, isAsc = true, currentSortCol = { id: "title" };
  var columns = [
                 { id: "id", name: "Title", field: "title", width: 240, sortable: true },
                 { id: "c2", name: "Sort 1", field: "c1", width: 240, sortable: true },
                 { id: "c3", name: "Sort 2", field: "c2", width: 240, sortable: true },
                 { id: "c4", name: "Sort 3", field: "c3", width: 240, sortable: true }
               ];
  var columnFilters = {};

  function filter(item) {
    for (var columnId in columnFilters) {
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = grid.getColumns()[grid.getColumnIndex(columnId)];
        if (item[c.field] != columnFilters[columnId]) {
          return false;
        }
      }
    }
    return true;
  }
  $(function () {
    dataView = new Slick.Data.DataView();
    grid = new Slick.Grid("#myGrid", dataView, columns, options);
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

    var data = [
                {id: 1 ,title: 'one', c1 : 1, c2: '1', c3 : 'test3'  },
                {id: 2 ,title: 'one', c1 : 2, c2: '2', c3 : 'test3'  },
               ];

		    
    var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));



	      grid.onSort.subscribe(function (e, args) {
	      var cols = args.sortCols;
	      
	      data.sort(function (dataRow1, dataRow2) {
	        for (var i = 0, l = cols.length; i < l; i++) {
	          var field = cols[i].sortCol.field;
	          var sign = cols[i].sortAsc ? 1 : -1;
	          var value1 = dataRow1[field], value2 = dataRow2[field];
	          var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
	          if (result != 0) {
	            return result;
	          }
	        }
	        return 0;
	      });
	      grid.invalidate();
	      grid.render();
	    });
    
    grid.init();
    dataView.beginUpdate();
    dataView.setItems(data);
    dataView.setFilter(filter);
    dataView.endUpdate();
  })
</script>
</body>
</html>