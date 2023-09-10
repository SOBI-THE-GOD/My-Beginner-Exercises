let avNumbArr = [] ;
let userNumb = 0 ;
let sumNumber = 0 ;

while (userNumb !== 'calc') {
    
    userNumb = prompt('Enter your Numbers to get avarage of them ! \n Enter (calc) keyWord to calculate the avarage !')
    
    if (userNumb != 'calc') {
        
        avNumbArr.unshift(userNumb) ; 
    
    }
    
    
};

for (let index = 0; index < avNumbArr.length ; index++) {
    
    sumNumber += Number(avNumbArr[index]);

};

console.log('avarage equals : ' + (sumNumber / avNumbArr.length ).toFixed(2));