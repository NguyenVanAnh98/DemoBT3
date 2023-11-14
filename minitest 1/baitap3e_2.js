function checkIsoscelesTriangle() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b || a === c || b === c) {
            document.getElementById('result').innerHTML = "Ba cạnh a, b, c tạo thành một tam giác cân.";
        } else {
            document.getElementById('result').innerHTML = "Ba cạnh a, b, c không tạo thành một tam giác cân.";
        }
    } else {
        document.getElementById('result').innerHTML = "Ba cạnh a, b, c không tạo thành một tam giác.";
    }
}