/*
 * Input: Số tiền USD, giá tiền USD theo VND
 *
 * Bước 1: Tạo biến soTienUSD, giaTienVND, giaQuyDoi
 * Bước 2: Gán giá trị cho biến soTienUSD, giaTienVND
 * Bước 3: Tính giá trị quy đổi theo công thức: giaQuyDOi = soTienUSD * giaTienVND
 * Bước 4: In kết quả ra console
 *
 * Output: Giá tiền USD quy đổi sang VND
 */

/*
var soTienUSD, giaTienVND, giaQuyDoi;

soTienUSD = Number(prompt("Nhập vào số tiền USD cần đổi:"));
giaTienVND = (23.5).toFixed(3);
giaQuyDoi = soTienUSD * giaTienVND;

console.log("Số tiền USD:", soTienUSD);
console.log("Giá tiền VND:", giaTienVND);
console.log("Giá tiền quy đổi: ", giaQuyDoi.toFixed(3));
*/

function calculateEx3() {
  var soTienUSD, giaTienVND, giaQuyDoi, result;

  soTienUSD = document.getElementById("money--usd").value;
  giaTienVND = document.getElementById("price").value;
  result = document.getElementById("result--ex3");

  giaQuyDoi = Number(soTienUSD) * Number(giaTienVND);

  result.value = giaQuyDoi.toFixed(3);
}
