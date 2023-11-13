let nam = +prompt("nhap nam");
let theKy
if (nam % 100 === 0) {
    theKy = nam / 100
    document.write("thế kỷ thứ " + theKy)
} else if (nam % 100 !== 0) {
    theKy = nam / 100 + 1;
    theKy = parseInt(theKy);
    document.write("thế kỷ thứ " + theKy);
}