let enteredNumb = prompt('Enter a number without (decible) !');


let sumEnteredNumb = 0 ;

for (let index = 0 ; index < enteredNumb.length  ; index++) {
   
   sumEnteredNumb += Number(enteredNumb[index]) ;

};

alert('Sum of entered number characters equal : ' + sumEnteredNumb);