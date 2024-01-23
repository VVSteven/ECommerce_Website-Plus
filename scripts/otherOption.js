document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the "Other" radio button
    let otherRadio = document.getElementById('otherRadio');
    if (otherRadio) {
        otherRadio.addEventListener('change', function () {
            // Get the text box element
            let otherTextBox = document.getElementById('otherText');

            // Toggle the visibility of the text box based on whether the radio button is checked
            otherTextBox.style.display = this.checked ? 'block' : 'none';
        });
    }
});
