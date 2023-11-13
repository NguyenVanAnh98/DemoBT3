function onClick() {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let S = a*b;
    document.getElementById('result').innerHTML =  'result = ' + S;
}