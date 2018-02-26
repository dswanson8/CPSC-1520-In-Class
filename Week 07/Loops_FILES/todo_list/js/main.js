// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function (evt) {
    console.log('toggle changed...');

    //need to select all checkboxes and by utilizing the "name" element we are able to select the checkboxes as they are all related to that element. Cannot use document.querySelector as that will only select one instance
    var checks = document.querySelectorAll('[name=message]');
    console.log(checks);
})