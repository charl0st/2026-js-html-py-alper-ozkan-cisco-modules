
//PART 1
function divide_func(dividen , divider){   
    if(divider == 0){
        throw RangeError("You can't divide by zero//Infinity");
        
    }else{    
    return dividen/divider;}
}


try{
    console.log(divide_func(10, 0));
}catch(RangeError){
        console.log(RangeError.message);
        
}

//PART 2
let numbers = [10, 40, 0, 20, 50];
let lenght = numbers.length - 1;

while(lenght > 0){
    try{
        divide_func(1000, numbers[lenght]);
    console.log(divide_func(10, 0));
    }catch(RangeError){
        console.log(RangeError.message);   
    }
  
    lenght--;
}
