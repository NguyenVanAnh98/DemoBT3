document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    var result = document.getElementById('result');
    result.innerHTML = "Kết quả: a^2 = " + (a * a) + ", a^b = " + Math.pow(a, b);
});