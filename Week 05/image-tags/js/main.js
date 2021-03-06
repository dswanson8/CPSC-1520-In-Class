// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

document.querySelector('.feature.frm').addEventListener('submit', function(evt) {
    console.log('Form submitted... ');
    var frm = evt.target;
    var tag = frm.elements.tags;
    var featureTag = document.querySelector('p.feature.tags');
    var error = document.querySelector('p.feature.error');

    //ensure that there is a value in the tag field before adding a tag
    if (tag.value.trim() != '') {
        //inset a '#' before the tag for aesthetics
        if (tag.value.trim().indexOf(' ') >= 0) {
          // don't allow multiword tags
          error.innerHTML = "Tags Cannot contain spaces";
          error.classList.remove('hidden');
        } else {
          document.querySelector('p.feature.tags ').innerHTML += '#' + tags.value + ' ';
          tag.value = '';
          error.classList.add('hidden');
        }
      } else {
        error.classList.remove('hidden');
        error.innerHTML= 'put something on at least';
    }

    evt.preventDefault();
});
