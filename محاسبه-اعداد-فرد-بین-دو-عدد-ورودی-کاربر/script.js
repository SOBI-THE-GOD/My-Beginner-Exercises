let firstNumb = +prompt('Enter the first number !');

let secondNumb = +prompt('Enter the second number !');

let index = 0 ;

while (index <= secondNumb) {
    
    if (index > firstNumb && index < secondNumb) {
        
        if (index % 2 == 0) {
            
            console.log(index - 1);
        
        }
    
    }
    
    index++

}