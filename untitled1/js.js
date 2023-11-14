
let diemGiuaky = +prompt('diemgiuaky')
let diemCuoiky = prompt('diemcuoiky')
let diemTB = (diemGiuaky + diemCuoiky * 2) / 3
let ketQua;
if (diemTB >= 0 && diemTB <= 5) {
    ketQua = "khongdat";
} else if (diemTB <= 8) {
    ketQua = "dat";
} else if (diemTB > 8 && diemTB <= 10) {
    ketQua = "Tot";
}
document.write(ketQua);