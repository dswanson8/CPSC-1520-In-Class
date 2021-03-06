// Note: The code here is presuming that this script is loaded at the END of the HTML Body tag.

// Step 1) Select the link
//  featureLink will reference an anchor tag
var featureLink = document.querySelector('a.link.feature');

// // Step 2) Create the event listener function (aka event handler)
// function featureLinkHandler(evt) { //evt parameter is an object representing the event as it is passed to our method
//     //  featureImage will reference an image tag
//     var featureImage = document.querySelector('img.feature');
//     featureImage.src = featureLink.href;
//     // All elements have a collection of class names that we can access
//     featureImage.classList.remove('hidden');

//     // Stop the normal event from happening
//     evt.preventDefault();
// }

// Step 3) Add the function as an event listener (hook it up to the 'click' event)
featureLink.addEventListener('click', featureLinkHandler);
//                          \ event / \  method name   /
//                           \name /
// Note that the featureLinkHandler is not called right now. Instead, it will be called when the click event happens on the featureLink element.


//  Question 1 - img.alt targetting
function featureLinkHandler(evt) { //evt parameter is an object representing the event as it is passed to our method
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    //this part is what was changed
    featureImage.alt = featureLink.title;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}


// //  Question 2 - mouse over function

var featureImage = document.querySelector('img.feature');
function featureImageListener(evt) {
    var paragraph = document.querySelector('p.feature.title');
    paragraph.innerHTML = featureImage.alt;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
}

featureImage.addEventListener('mouseover', featureImageListener);

