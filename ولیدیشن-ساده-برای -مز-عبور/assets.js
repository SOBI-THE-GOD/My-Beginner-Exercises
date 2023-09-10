
function userNameLengthChecker() {
    let inputValue = document.getElementById("userName").value ;
    if (inputValue.length <= 3) {
        alert("نام کاربری حداقل باید بیشتر از 3 کاراکتر باشد !");
    } else {
        alert("نام کاربری ذخیره شد");
    };
};
function userNameInputClear() {
    let userNameInputValue = document.getElementById("userName").value ;
    if (userNameInputValue !== "") {
        document.getElementById("userName").value = "";
    };
};
function passWordLengthChecker() {
    let passInputValue = document.getElementById("passWord").value ;
    if (passInputValue.length <= 8) {
        alert("رمز عبور خداقل باید 8 کاراکتر باشد !");
    } else{
        alert("رمز عبور ذخیره شد :)");
    };
};
function passWordInputClear() {
    let passInputValue = document.getElementById("passWord").value ;
    if (passInputValue !== "") {
        document.getElementById("passWord").value = "";
    };
};



