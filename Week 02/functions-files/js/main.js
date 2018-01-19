/*  
    main.js
    This is a comment block, enclosed in a slash + asterisk and ending with an
    asterisk + slash
*/

//  Demo of calling a function - console is the javscript editor environment
//  console.log(message);
console.log('main.js is loaded');

//  The updateInnerHTML function has two parameters:
//  - selector - is a string that identifies  which DOM element to get or select
//  - newValue - is a string that will be the new value for the selector's .innerHTML
function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

// function strong(value) {
//     //  Combining strings to produce a new string is called: concatenation
//     return '<strong>' + value + '</strong>';
// }

//create italic function
function wrapItalicTag (value) {
    return '<i>' + value + '</i>';
}

//wrap value in wrapItalicTag funciton
var notefooter = document.querySelector('span.note').innerHTML;
notefooter = wrapItalicTag(notefooter)

updateInnerHTML('span.note', notefooter);