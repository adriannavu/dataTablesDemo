$(document).ready(function() {
  console.log('scripts loaded');
  // $('#hard-coded').DataTable();

  $('#ajax-table').DataTable({
    "ajax": "/js/nations.txt",
    "columns": [{
        "data": "name"
      },
      {
        "data": "Area"
      },
      {
        "data": "Population"
      },
      {
        "data": "Airports"
      }
    ],
    "columnDefs": [{
      "targets": [0, 3],
      "createdCell": function(td, cellData, rowData, row, col) {
        if ("Airports".cellData > 400) {
          $(td).css('color', 'red');
        }
        // $(td).on({
        //   mouseenter: function() {
        //     //get text of element you hover over. txt value becomes name of id
        //     var txt = $(this).text();
        //     console.log(txt);
        //     $('#' + txt).toggleClass('hidden');
        //   },
        //   mouseleave: function() {
        //     var txt = $(this).text();
        //     console.log(txt);
        //     $('#' + txt).toggleClass('hidden');
        //   }
        // }); //close td on
      } //close createdCell
    }] //close columnDefs
  }); //close DataTables
});