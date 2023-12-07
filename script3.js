let display=document.getElementById('display');

function appendToDisplay(value){
    display.value+=value;
}

function clear_display(){
    display.value='';
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='ERROR';
 }
}