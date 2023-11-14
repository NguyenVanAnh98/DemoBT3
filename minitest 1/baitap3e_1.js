function checkTriangle() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById('result').innerHTML = "Ba cạnh a, b, c tạo thành một tam giác.";
    } else {
        document.getElementById('result').innerHTML = "Ba cạnh a, b, c không tạo thành một tam giác.";
    }
}