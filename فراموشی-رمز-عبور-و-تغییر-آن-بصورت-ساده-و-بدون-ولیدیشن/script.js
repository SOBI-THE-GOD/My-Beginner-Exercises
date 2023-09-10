let usersInfo = [{id : 1 , name : 'Alireza' , password : '12345' , age : 19} ,
{id : 2 , name : 'Ahmad' , password : '9876' , age : 45}];
let userAnswer = prompt('did you forgot yout password ? \n.Yes \n.No');
if (userAnswer.toLowerCase() === 'yes') {
    let userName = prompt('Enter your name :');
    let userIndex = usersInfo.findIndex(user => user.name.toLowerCase() === userName.toLowerCase());
    if (userIndex >= 0) {
       let changePass = prompt('your password is : ' + usersInfo[userIndex].password + '\nDo you want to change your password ? \n.Yes \n.No')
       if (changePass.toLowerCase() === 'yes') {
            let newPassword = prompt('Enter the new password :');
            let reEnteredPassword = prompt('ReEnter your password');
            if (newPassword === reEnteredPassword) {
                usersInfo[userIndex].password = newPassword ;
                alert('password is succesfully changed to : ' + newPassword + ' you can login now !')
            } else {
                alert('Entered password is not valid')
            }
       } else if (changePass.toLowerCase() === 'no') {
            alert('login than !')
       } else {
            alert('Entered Answer is not valid')
       }
    } else {
        alert('user with "' + userName + '" name is not defined');
    }
} else if (userAnswer.toLowerCase() === 'no') {
    alert('login than !')
} else {
    alert('Entered Answer is not valid')
}
console.log(usersInfo);