let userString = prompt('Enter your string name !');
let userStringArr =  userString.split('');
userStringArr = userStringArr.reverse();
userStringArr = userStringArr.join('');
if (userString === userStringArr) {
    alert('your string is equals with reverse of it : )')
} else {
    alert('your string is not equals with reverse of it : (')
};


