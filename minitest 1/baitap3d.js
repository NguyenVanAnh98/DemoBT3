document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let a = parseInt(document.getElementById('a').value);

    let century = Math.ceil(a / 100);

    let result = document.getElementById('result');
    result.innerHTML = "Kết quả: Năm " + a + " thuộc thế kỷ " + century;
});