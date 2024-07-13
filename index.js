const userinput = document.getElementById("userinput");
const stuff = document.getElementById("stuff");

function onep(){
    stuff.value = Math.round(eval(userinput.value / 3.56));
}

function twop(){
    stuff.value = Math.round(eval(userinput.value / 7.12));
}

function fivep(){
    stuff.value = Math.round(eval(userinput.value / 3.25));
}

function tenp(){
    stuff.value = Math.round(eval(userinput.value / 6.5));
}

function twentyp(){
    stuff.value = Math.round(eval(userinput.value / 5.0));
}

function fiftyp(){
    stuff.value = Math.round(eval(userinput.value / 8.0));
}

function onepo(){
    stuff.value = Math.round(eval(userinput.value / 8.75));
}

function twopo(){
    stuff.value = Math.round(eval(userinput.value / 12.0));
}