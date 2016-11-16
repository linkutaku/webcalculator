var num = 0,
    display = document.getElementById("displayspan"),
    zero = true,
    div = false,
    mul = false,
    sub = false,
    add = false,
    opr,
    re;
    poi = false;

var oprt = {
    name : "",
    dis : false,
    firstNum : "",
    secondNum : "",
};


function input(num){
    if (zero){
        display.innerHTML = "";
    }
    if (String(display.innerHTML).length < 9) {
        if (oprt.dis) {
            display.innerHTML = "";
            oprt.dis = false;
        }
        display.innerHTML += String(document.getElementById(num).innerHTML); 
    }
    if (String(display.innerHTML).length >= 9){
        if (oprt.dis) {
            display.innerHTML = "MAXX :(";
            oprt.dis = false;
        }
    }
    zero = false;
    if (display.innerHTML.indexOf(".") < 0){
        poi = true;
    }
    else {
        poi = false;
    }
}

function inputpoint(num){
    if (poi) {
        display.innerHTML += String(document.getElementById(num).innerHTML);
        poi = false;
    }
}

function clean(){
    display.innerHTML = "0";
    zero = true;
}

function getopr(opr){
    oprt.name = String(opr);
    oprt.dis = true;
    oprt.firstNum = Number(display.innerHTML);
}

function getresult(){
    oprt.secondNum = Number(display.innerHTML);
    switch(String(oprt.name)){
        case "add":
            re = oprt.firstNum + oprt.secondNum;
            break;
        case "mul":
            re = oprt.firstNum * oprt.secondNum;
            break;
        case "sub":
            re = oprt.firstNum - oprt.secondNum;
            break;
        case "div":
            re = oprt.firstNum / oprt.secondNum;
            break;
        default:
            display.innerHTML = "ERROR";
            break;
    }
    oprt.firstNum = "";
    oprt.secondNum = "";
    var result = String(re);
    if (result.indexOf(".") > 0){
        if (result.length <= 9) {
            display.innerHTML = result;
        }
        else{
            console.log(result);
            if (result.indexOf(".") > 8){
                display.innerHTML = "MAXX :(";
            }
            else{
                display.innerHTML = "";
                for (var i = 0; i < 9; i++){
                    display.innerHTML += result[i];
                }
            }
        } 
    }
    else{
        if (result.length <= 9) {
            display.innerHTML = result;
        }
        else{
            console.log(result);
            display.innerHTML = "MAXX :(";
        } 
    }
    
}
