const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value ="";

}



function calculate(){

    try{
        const result = eval(display.value);



        if(display.value.includes("/0")){
            display.value = "cannot divde by zero!";


        } else if(isNaN(result)){
            display.value = "Invalid input!";

        }
        else{
            display.value = result;
        }
    }

    catch(error){

  display.value="Error";
       
    }
    
}


function resetCalculator() {
    clearDisplay(); 
}