let userNumb = +prompt("enter your number with no decible !");

let userLength = 0;

if (userNumb !== NaN && userNumb !== undefined) {
    if (userNumb === 0) {
        userLength = 1;
    } else {
        for (let index = userNumb; Math.floor(index) != 0; index /= 10) {
            userLength++;
        }
    }
}

alert("digit length : " + userLength);
