let userNumber = [] ;
let minNumber = 0 ;

for (let index = 0; userNumber[index -1] != 'calc' ; index++) {
    userNumber[index] = prompt('Enter a Number please !') ;
}
userNumber.pop();
minNumber = userNumber[0] ;
console.log(userNumber);
for (let index = 0; index < userNumber.length; index++) {
   if (minNumber < userNumber[index]) {
        minNumber = minNumber;
   } else {
    minNumber = userNumber[index];
   }
} ;
alert('min Number is : \n' + minNumber) ;

