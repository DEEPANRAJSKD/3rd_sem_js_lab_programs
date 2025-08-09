function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    if(isNaN(num1)||isNaN(num2)){
        result="Enter a valid number";
    }
    else{
     switch(operation){
    //addition
        case "add":
            result=num1 + num2;
            break;
    //subtraction
        case "subtract":
            result=num1 - num2;
            break;
    //multiplication
        case "multiply":
            result=(num1)*(num2);
            break;
    //division
        case "division":
            if(num2=== 0){
                result="cannot divide by zero";}
            else{
                result=num1/num2;
            }
            break;
        default:
            result="Invalid operation";
     }  
 }
 result = document.getElementById("result").innerText = "Result :" +result;

} 
