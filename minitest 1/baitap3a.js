
function perimeter() {
    let a = document.getElementById('input').value;
    let C = a*4;
    document.getElementById('result').innerHTML = 'result : ' + C;
}

function acreage() {
    let a = document.getElementById('input').value;
    let S = a*a
    document.getElementById('result').innerHTML = 'result : ' + S;
}
function reset() {
    document.getElementById('input').value = "";
}