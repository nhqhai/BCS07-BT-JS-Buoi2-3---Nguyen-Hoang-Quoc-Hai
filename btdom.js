// Bài tập: Tính tiền lương nhân viên
// Sơ đồ 3 khối:
// Input: Lương 1 ngày: 100.000 Nhập số ngày làm
// Các bước xử lý: Lấy số lương 1 ngày * số ngày đã nhập
// Output: Xuất ra số tiền lương theo số ngày đã nhập


function tinhTienLuong(){
    var soNgayLam = document.getElementById("soNgayLam").value *1;
    var tienLuong = 100000 * soNgayLam;
    document.getElementById(tienLuong)
}
document.querySelector(".btn-success").onclick = tinhTienLuong;