/*
	TASK: prompt for individual names and add them to 
		  a list.  Confirm after each name is entered
		  whether the user would like to enter another
		  name or not.
*/

//select by classname of .output
var output = document.querySelector('.output');
var list = '<ul>';
var unorderedList = document.querySelector('.output ul');
var select = document.querySelector('.items');

select.addEventListener

// add names
do {
	list += '<li>' + prompt('Enter name:') + '</li>';
	unorderedList.innerHTML += list;
} while (confirm('Another name?'));

list += '</ul>';

// display the list
output.innerHTML = list;