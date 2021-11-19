let screen = document.querySelector(".screen");
screen.value = "";

function update(selected){
    screen.value += selected.id;
}

function calculate(){
    if(screen.value == ""){
        return;
    }
    screen.value = eval(screen.value);
}

function reset(){
    screen.value = "";
}

function del(){
    let text = screen.value.toString();
    screen.value = text.slice(0,text.length-1);
}