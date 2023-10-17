var a = document.getElementById('input');

function show(abc){
    a.value += abc
}

function cler(){
    a.value = ''
}

function result(){
    a.value = eval(a.value)
}

function squre(){
    a.value = a.value * a.value
}


function del(){
    var clearlast = a.value;
    clearlast = clearlast.substring(0,clearlast.length-1)
    a.value = clearlast
}