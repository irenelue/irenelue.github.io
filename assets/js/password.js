var password = "12345";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Whoops, incorrect password. Pleasery again.');
        return false;
    }

    if (document.getElementById('pass1').value == password) {
        alert('Correct password! Close this box to enter.');
    }
}
    
