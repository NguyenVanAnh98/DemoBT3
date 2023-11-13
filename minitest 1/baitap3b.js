function onClick1() {
    let a = document.getElementById('inputA').value;
    let s = a ** 2;
    document.getElementById('result').innerHTML = 'result : ' + s;
} function onClick2() {
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;
    let s2 = a ** b;
    document.getElementById('result').innerHTML = 'result : ' + s2;
}
function reset() {
    document.getElementById('inputA').value = "";
    document.getElementById('inputB').value = "";
}