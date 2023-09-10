let userTime = prompt('Enter the time ! \nsyntax Example : XX:XX');
let index = 0 ;
let sumSeconds = 0;
userTime = userTime.split(':');
if (userTime[0] >= 0 && userTime[0] <= 23 && userTime[1] >= 0 && userTime[1] <= 59) {
    
    userTime.forEach(element => {
        switch (index) {
            case 0:
                sumSeconds = +element * 60
                break;
        
            default:
                sumSeconds += +element
                break;
        };
        index++

        setInterval(() => {
    
            if (sumSeconds === 0) {
                alert('time is up !')
                clearInterval()
            };
            
            sumSeconds--
            
        } , 1000);
        
    });
} else {
    alert('Entered time is not valid !')
};

console.log(sumSeconds);
