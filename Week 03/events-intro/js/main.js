// 1. select the target element

var featuerImage = document.querySelector('img.feature');

// 2. create the event listener function

function handleFeatureClick() {
    console.log('img.feature was clicked...');
    // Grab the HTMLElement with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    // All HTMLElement objects have a .classList property that is a collection of class names
    desc.classList.remove('hidden');
}

// 3. add event listener
featuerImage.addEventListener('click', handleFeatureClick);