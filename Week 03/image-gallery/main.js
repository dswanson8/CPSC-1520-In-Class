/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/

var imageLinks = document.querySelector('div.image-links');
var targetImage = document.querySelector('img.target-image');



console.log('starting point...');

function changeImage(evt) {
    console.log('click event activated...');
    targetImage.setAttribute('src', evt.target); //set attribute to replace clicked target's selected field
    

    evt.preventDefault();
}


imageLinks.addEventListener('click', changeImage);




