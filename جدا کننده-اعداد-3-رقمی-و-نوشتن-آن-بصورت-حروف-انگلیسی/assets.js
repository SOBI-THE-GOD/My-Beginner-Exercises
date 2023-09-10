let input = prompt("give me a number from 1 to 999") ;
let sim = input.split(""); 
let a;
let b;
let c;
for (let index = 0; index < sim.length; index++) {
        
    if (index == 0) {
        
        switch (sim[index]) {
            case "1":
                a = "one";
                break;
            case "2":
                a = "two";
                break;
            case "3":
                a = "three";
                break;
            case "4":
                a = "four";
                break;
            case "5":
                a = "five";
                break;
            case "6":
                a = "six";
                break;
            case "7":
                a = "seven";
                break;
            case "8":
                a = "eight";
                break;
            case "9":
                a = "nine";
                break;
            case "0":
                a = "zero";
            break;
        
        };
    };
    if (index == 1) {
        
        switch (sim[index]) {
            case "1":
                b = "one";
                break;
            case "2":
                b = "two";
                break;
            case "3":
                b = "three";
                break;
            case "4":
                b = "four";
                break;
            case "5":
                b = "five";
                break;
            case "6":
                b = "six";
                break;
            case "7":
                b = "seven";
                break;
            case "8":
                b = "eight";
                break;
            case "9":
                b = "nine";
                break;
            case "0":
                b = "zero";
                break;
        
        };
    };
    if (index == 2) {
        
        switch (sim[index]) {
            case "1":
                c = "one";
                break;
            case "2":
                c = "two";
                break;
            case "3":
                c = "three";
                break;
            case "4":
                c = "four";
                break;
            case "5":
                c = "five";
                break;
            case "6":
                c = "six";
                break;
            case "7":
                c = "seven";
                break;
            case "8":
                c = "eight";
                break;
            case "9":
                c = "nine";
                break;
            case "0":
                c = "zero";
                break;
        
        };
    };
};
alert(a + "-" + b + "-" +c);


