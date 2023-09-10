let firstNumber = +prompt('Enter the first number !');

let secondNumber = +prompt('Enter the second number !');

let powNumber = 0 ;

for (let index = 0; index < secondNumber; index++) {
    
    if (index === 0) {
        
        powNumber = firstNumber;
    
    } else {

        powNumber *= firstNumber ;
    };
    
};

alert('pow number equals : ' + powNumber) ;