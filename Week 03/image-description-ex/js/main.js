// 1) Declare my event handlers
function showImage(evt) {
    // console.log('showImage function called')
    // console.log(linkElement);

    // a) Get a reference to the <img class="feature"> element
    var imgElement = document.querySelector('img.feature');

    // b) remove the 'hidden' class from the element
    imgElement.classList.remove('hidden');

    // c) Get the href from the <a class="feature link" href="..."> element
    //      (storing in a local, temporary variable)
    var imgSrc = linkElement.href;

    // d) Set the .src attribute's value for the <img?
    imgElement.src = imgSrc;

    // e) Set the .alt attribute's value for the <img>
    imgElement.alt = linkElement.title;

    // f) get a reference to the <p class = "feature title"></p> element
    var captionParagragh = document.querySelector('p.feature.title');

    // g) put some text in that paragraph
    captionParagragh.innerHTML = linkElement.title;
    console.log(imgSrc);

    // h) Stop the default actions of this event (the 'click' on a <a> tag )
    evt.preventDefault();
}

// 2) Find the elements that respond to events
var linkElement = document.querySelector('a.feature.link');


// 3) "Wire up" the elements to the event handlers
linkElement.addEventListener('click', showImage);

/*

//  Step 1 - Select the link
//  feature link will reference an anchor tag

var featureLink = document.querySelector('a.link.feature');

//  Step 2 - Create the event listener function (aka event handler)
function featureLinkHandler(evt) { //  evt parameter is an object representing the event as it is passed to our method

    //  featureImage will reference an image tag
    var featureImage = document.querySelector('img.feature')
    feature.src = featureLink.href;
    //  all elements have a collection of class names that we can access
    featureImage.classList.remove('hidden');

    //  Stop the default actions of this event
    evt.preventDefault();

}

//  Step 3 - "Wire up" the elements to the event handlers

*/