let displayValue=''
function appendNumber(a){
    displayValue+=a;
    document.getElementById('result').innerText= displayValue;
}
function equalto(){
    var k=eval(displayValue);
    document.getElementById('result').innerText= k;
    console.log(k)
}
function clearall() {
    displayValue =''
    document.getElementById('result').textContent = '0';
}
function clear() {
    var k=
    document.getElementById('result').textContent = '0';
}

// let str =23
//     var c,d=str.split();
//     console.log(c,d)