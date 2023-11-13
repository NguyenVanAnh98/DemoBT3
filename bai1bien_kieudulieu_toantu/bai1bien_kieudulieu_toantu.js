function tinhDiem() {

    let diemVatLy = parseFloat(document.getElementById("diem-vat-ly").value);
    let diemHoaHoc = parseFloat(document.getElementById("diem-hoa-hoc").value);
    let diemSinhHoc = parseFloat(document.getElementById("diem-sinh-hoc").value);

    let tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;

    let diemTrungBinh = tongDiem / 3;

    let ketQua = "Điểm trung bình: " + diemTrungBinh.toFixed(2) + "<br>";
    ketQua += "Tổng điểm: " + tongDiem.toFixed(2);

    document.getElementById("ket-qua").innerHTML = ketQua;
}