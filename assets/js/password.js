var password = "7E83tR?";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Whoops, incorrect password. Please try again.');
        return false;
    }

    if (document.getElementById('pass1').value == password) {
        alert('Success! Please close this box to enter.');
    }
}
    
