
function calculateSquareProperties() {
    let aInput = document.getElementById("sideLength");
    let perimeterOutput = document.getElementById("perimeter");
    let areaOutput = document.getElementById("area");
    let sideLengthOutput = document.getElementById("sideLengthResult");

    let a = parseFloat(aInput.value);
    let perimeter = 4 * a;
    let area = a * a;

    perimeterOutput.innerHTML = "Chu vi: " + perimeter;
    areaOutput.innerHTML = "Diện tích: " + area;
    sideLengthOutput.innerHTML = "Độ dài cạnh: " + a;
}