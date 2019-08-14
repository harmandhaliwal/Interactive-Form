//sets focus on name field on load
$('#name').focus();
//hides "other" job role input textbox initially
$('#other-title').hide();

$('#title').on('change', (e) => {
    // if option value is "other" show text input element
    if ($(e.target).val() === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});