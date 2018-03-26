/*
  Add the required JavaScript to handle form submit and add a new todo item to
  the page (in the div.todo-list element).  You will need to use a counter to
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {

	var div,
		checkbox,
		label,
		labelText,
		todoText;

	todoText = evt.target.elements['todo-item'].value; //grab value from textbox
//					 \ <form> / \ <input name=".." /  \text/

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;

	if (todoText === '') {
		todoText = 'todo ' + (todoCount); //default text for our Todo item
	}

	// create required elements
	div = document.createElement('div'); // This creates a <div> node, with the ability to have attributes
	checkbox = document.createElement('input'); // create an <input> node
	label = document.createElement('label'); // a <label> node
	labelText = document.createTextNode(todoText); // a node that only has "raw" text

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox'); // <input type="checkbox">
	checkbox.setAttribute('id', 'todo-' + todoCount); // <inout type="checkbox" id="todo-1"
	label.setAttribute('for', 'todo-' + todoCount); // <label for="todo-1">
	label.setAttribute('contenteditable', ''); // <label for=todo-1" contenteditable>


/*
	.setAttribute(attributeName, attributeValue) - adds/changes the attribute value
	.setAttribute(attributeName) - returns the attributevalue
	.hasAttribute(attributeName) - returns true of the attribute exists
	.removeAttribute(attributeName) - deletes the attributes from the element
*/


	// build document fragment - "assemble" the various elements
	label.appendChild(labelText); 	// 	<label> for="todo-1" contenteditable>Todo 1 </label>
	div.appendChild(checkbox); 			// 	<div>
																	// 			input type="checkbox" id="todo-1"
																	//	</div>
	div.appendChild(label);					//	<div>
																	//			<input type="checkbox"

// Add some up?down arrows to our <div>
var upArrow = document.createElement("span");
var up = "\u21e7";
var upText = document.createTextNode(up);
upArrow.setAttribute("class", "arrow up");
upArrow.appendChild(upText);
div.appendChild(upArrow);


//todo: Add the code to put a down arrow = \u21e9

var downArrow = document.createElement("span");
var down = "\u21e9";
var downText = document.createTextNode(down);
downArrow.setAttribute("class", "arrow down");
downArrow.appendChild(downText);
div.appendChild(downArrow);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();


	document,querySelector(".todo-list").addEventListener("click", function () {
		//check for click on an arrow
		var targetTodo = evt.target.parentNode;
		var todoList = targetTodo.parentNode;
		var siblingTodo;
	
		if (evt.target.classList.contains("dn")) {
			siblingTodo = targetTodo.nextElementSibling;
			//insert the sibling before the target
			todoList.insertBefore(siblingTodo, targetTodo);
		} else if (evt.target.classList.contains('up')) {
			siblingTodo = targetTodo.previousElementSibling;
			//insert the target before the sibling
			todoList.insertBefore(targetTodo, siblingTodo);
		}
	
	});
	
});