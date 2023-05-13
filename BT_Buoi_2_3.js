// Bài tập 1: Tính tiền lương nhân viên
// Sơ đồ 3 khối:
// Input: Lương 1 ngày: 100.000 Nhập số ngày làm
// Các bước xử lý: Lấy số lương 1 ngày * số ngày đã nhập
// Output: Xuất ra số tiền lương theo số ngày đã nhập

  function tinhTienLuong(){
    var luongMotNgay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value *1;
    var tongLuong = luongMotNgay * soNgayLam;
    document.getElementById("hienThiKetQua").innerHTML = "Tiền công làm culi của bạn là: " + tongLuong + " Dollar";
  }
  document.querySelector(".btn-success").onclick = tinhTienLuong;

// ------------------------------------

// Bài tập 2: Tính giá trị trung bình
// Sơ đồ 3 khối:
// Input: Nhập 5 số thực
// Bước xử lý: tính trung bình cộng  của 5 số đã nhập ( cộng lại chia 5)
// Output: Xuất ra số trung bình cộng của 5 số đã nhập

function tinhSoTrungBinhCong(){
  var soThu1 = document.getElementById("soThu1").value *1;
  var soThu2 = document.getElementById("soThu2").value *1;
  var soThu3 = document.getElementById("soThu3").value *1;
  var soThu4 = document.getElementById("soThu4").value *1;
  var soThu5 = document.getElementById("soThu5").value *1;
  var tinhTrungBinhCong = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("hienThiSoTrungBinhCong").innerHTML = "Trung bình cộng của 5 số đã nhập là: " + tinhTrungBinhCong;
}
document.querySelector(".btn-danger").onclick = tinhSoTrungBinhCong;

// ------------------------------------

// Bài Tập 3:
// Input: nhập vào số tiền USD
// Bước xử lý: áp dung quy tắc tam suất (số tiền USD đã nhập * cho tỷ giá 1USD sau khi quy đổi ra tiền VND và chia lại cho số USD quy đổi đó).
// Bước trên múa lửa cho nguy hiểm thôi chứ ta lấy thẳng số USD đã nhập * 23.500VNĐ (tính theo tỷ giá đề bài cho) cho nhanh. :v
// Output: xuất ra số tiền VNĐ

function quyDoiTien(){
  var soTienUSD = document.getElementById("soTienUSD").value *1;
  var soTienVND = soTienUSD * 23500;
  document.getElementById("hienThiQuyDoiUSD").innerHTML = "Sự giàu có của bạn khi đổi qua mệnh già VNĐ là: " + soTienVND +" VNĐ";
}
document.querySelector(".btn-info").onclick = quyDoiTien;

// ------------------------------------

// Bài Tập 4: Tính chu vi và diện tích hình chữ nhật
// Input: nhập vào Chiều Dài và Chiều Rộng của hình Chữ Nhật
// Bước xử lý: áp dụng công thức học hồi tiểu học để tính chu vi và diện tích của hình chữ nhật (CV = (dài + rộng)*2 ; DT = dài * rộng)
// Ouput: xuất 2 kết quả kia ra thôi.

function tinhChuViDienTichHinhChuNhat(){
  var chieuDai = document.getElementById("chieuDai").value *1;
  var chieuRong = document.getElementById("chieuRong").value *1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  document.getElementById("hienThiChuViDienTichHinhChuNhat").innerHTML = "Chu vi Hình chữ nhật là: " + chuVi + "<br>" + "Diện tích Hình chữ nhật là: " + dienTich;
}
document.querySelector(".btn-dark").onclick = tinhChuViDienTichHinhChuNhat;

// ------------------------------------

// Bài Tập 5: Tính tổng 2 kí số
// Input: Nhập vào 1 số có 2 chữ số
// Bước xử lý: Lấy số vừa nhập / 10 để lấy đc số hàng chục, sau đó chia lấy dư cho 10 để lấy số hàng đơn vị
// Output:Xuất ra đc tổng của 2 kí số vừa nhập

function tinhTong2KiSo(){
  var soN = document.getElementById("soN").value*1;
  var soHangChuc = Math.floor(soN / 10);
  console.log(soHangChuc);
  var soHangDonVi = soN %10;
  console.log(soHangDonVi);
  var tong2KiSo = soHangChuc + soHangDonVi;
  document.getElementById("hienThiTong2KiSo").innerHTML = "Tổng của 2 ki số đã nhập là: " + tong2KiSo;
}
document.querySelector(".btn-warning").onclick = tinhTong2KiSo;
