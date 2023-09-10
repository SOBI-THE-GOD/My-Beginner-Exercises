let usersArr =  [{name : 'Alireza' , family : 'Sobi' , age : 20 , gmail : 'alireza@gmail.com'} , 

{name : 'Khosro' , family : 'Mehrdoost' , age : 21 , gmail : 'khosro@gmail.com'} , 

{name : 'Mehrdad' , family : 'Noroozzadeh' , age : 21 , gmail : 'mehrdad@gmail.com'}];

let userAnswer = '' ;

while (userAnswer.toLowerCase() != 'no') {

    userAnswer = prompt('do you wanna sign up ? \n (yes)keyword for singup and (no)keyword for rejection');

    if (userAnswer.toLowerCase() === 'yes') {
        
        usersArr.push({})

        usersArr[usersArr.length - 1].name = prompt('Enter your first name :') ;
        
        if (usersArr[usersArr.length -1].name.length >= 3 && usersArr[usersArr.length -1].name.length <= 10) {
            
            usersArr[usersArr.length -1].family = prompt('Enter your last name :') ;
            
            if (usersArr[usersArr.length -1].family.length >= 3 && usersArr[usersArr.length - 1].family.length <= 15) {
                
                usersArr[usersArr.length -1].age = prompt('how old are you ?' , 12);
                
                if (usersArr[usersArr.length -1].age >=12 && usersArr[usersArr.length -1].age <=100) {
                    
                    usersArr[usersArr.length -1].gmail = prompt('Enter you gmail address :' , 'xxxxx@gmail.com');
                    
                    alert('congratulations your account is created \n your name is : ' + usersArr[usersArr.length -1].name + '\n your family name is : ' + usersArr[usersArr.length -1].family + '\n you are ' + usersArr[usersArr.length -1].age + '\n your gmail address is : ' + usersArr[usersArr.length -1].gmail);
                
                } else {

                    usersArr.pop();
                    
                    alert('Entered age Number is invalid ! \n try again');
                
                };
            
            } else {

                usersArr.pop();
                
                alert('Entered family name is not valid ! \n try again');
            
            };
        
        } else {

            usersArr.pop();
            
            alert('Entered first name is not valid ! \n try again');
        
        };

    };

};

console.log(usersArr);

alert('have a great day. \n if you wanted to sign up you can try later again')






    
     
    
