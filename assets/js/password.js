var password = "12345";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Whoops, incorrect password. Please try again.');
        return false;
    }

    if (document.getElementById('pass1').value == password) {
        alert('Success! Please close this box to enter.');
    }
}
    
