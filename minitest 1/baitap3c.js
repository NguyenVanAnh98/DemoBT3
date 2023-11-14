document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    let sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }

    let result = document.getElementById('result');
    result.innerHTML = "Kết quả: Tổng các số từ " + a + " đến " + b + " là " + sum;
});