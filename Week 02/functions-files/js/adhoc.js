// 1.   Create a function called wrapInBlockQuote that will take in a single value and return a string that wraps the text in an HTML block quote tag.

console.log('adhoc.js is loaded');

function wrapInBlockQuote(value) {
    return '<blockquote>' + value + '</blockquote>' 
}

// 2.   Write the JavaScript code to get the element with the id of "leadquote" and, using the functino in step 1, wrap the contents of that element in a blockquote.

var leadQuote = document.getElementById('leadQuote');

leadQuote.innerHTML = wrapInBlockQuote(leadQuote.innerHTML);
// function updateInnerHTML(Selector, newValue) {
//     document.querySelector(Selector).innerHTML = newValue;
// }

// updateInnerHTML('#leadQuote', leadQuote);