// *show or hide password input
let showPassWordImg = document.getElementById('showPassWordImg');
let showHidePassWord = () => {
    if (passWordInput.getAttribute('type') === 'password') {
        passWordInput.type = 'text';
        showPassWordImg.src = 'hide.png';
    } else {
        passWordInput.type = 'password';
        showPassWordImg.src = 'show-password.png';
    };
};

// ?random color background change

let bodyElement = document.body;
let rgbRed , rgbGreen , rgbBlue ;
setInterval(() => {
    rgbRed = Math.floor(Math.random() * 255);
    rgbGreen = Math.floor(Math.random() * 255);
    rgbBlue = Math.floor(Math.random() * 255);
    bodyElement.style.backgroundColor = 'rgb(' + rgbRed + ',' + rgbGreen + ',' + rgbBlue + ')' ;
} , 3000);
