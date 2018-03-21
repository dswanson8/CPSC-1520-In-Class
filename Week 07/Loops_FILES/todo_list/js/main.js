// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function (evt) {
    console.log('toggle changed...');

    //need to select all checkboxes and by utilizing the "name" element we are able to select the checkboxes as they are all related to that element. Cannot use document.querySelector as that will only select one instance
    var checks = document.querySelectorAll('[name=message]');
    console.log(checks);

    var idx = 0; //tracks where you want to start. Any index will start at 0, so that is why the idx is established at 0

    //while condition is dependent on how many elements are in the list.  That is where the checks.length comes in as the loop will only go as long as the length
    while (idx < checks.length) {
      if (evt.target.checked) {
        checks[idx].checked = true;

      } else {
        checks[idx].checked = false;
      }
      // this is to ensure that you do not go in a endless loop so this will allow you to go through all the index's in the list
      idx = idx + 1;
    }

});
  var searchInput, sortSearchInput, table, tableRow, td, counter;

  function searchFunction () {

    searchInput = document.querySelector('input#search');
    sortSearchInput = searchInput.value.toUpperCase();
    table = document.querySelector('table');
    tableRow = table.getElementsByTagName('tr');

    for (counter = 1; counter < tableRow.length; counter++) {
      td = tr[counter].getElementsByTagName('td')[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(sortSearchInput) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = 'none';
        }
      }
    }

    }
