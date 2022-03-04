/*
 * Input: Số ngày làm việc, tiền lương 1 ngày
 *
 * Bước 1: Tạo biến soNgay, tienLuong, tongLuong
 * Bước 2: Gán giá trị cho biến soNgay, tienLuong
 * Bước 3: Tính tổng lương theo công thức: tongLuong = soNgay * tienLuong
 * Bước 4: In kết quả ra console
 *
 * Output: Tổng số tiền lương
 */

/*
var soNgay, tienLuong, tongLuong;

soNgay = Number(prompt("Nhap vao so ngay lam viec"));
tienLuong = 100000;
tongLuong = soNgay * tienLuong;

console.log("So ngay:", soNgay);
console.log("Tien luong:", tienLuong);
console.log("Tong luong: " + tongLuong + " VND");
*/

function calculateEx1() {
  var soNgay, tienLuong, tongLuong, result;

  soNgay = document.getElementById("datenumber").value;
  tienLuong = document.getElementById("money").value;
  result = document.getElementById("result--exe1");

  tongLuong = Number(soNgay) * Number(tienLuong);

  result.value = tongLuong;
}
