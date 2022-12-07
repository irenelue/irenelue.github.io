var password = "7E83tR?";
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button");


function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Whoops, incorrect password. Please try again or contact me if you believe this is an error.');
        return false;
    }

    if (document.getElementById('pass1').value == password) {
        // alert('Success! Please close this box to enter.');
        return;
    }
}
    
