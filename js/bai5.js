/**
 * Input: Số có 2 chữ số
 *
 * Bước 1: Tạo biến: number, hangChuc, hangDonVi, sum
 * Bước 2: Gán giá trị cho biến number
 * Bước 3: Tính theo công thức: hangDonVi = chia cho 10 lấy dư; hangChuc = chia cho 10 lấy nguyên; sum = hangChuc + hangDonVi
 * Bước 4: In kết quả ra console
 *
 * Output: Tổng 2 ký số của số đó
 */

/*
var number, hangChuc, hangDonVi, sum;

number = Number(prompt("Nhập số có 2 chữ số:"));

hangChuc = Math.floor(number / 10);
hangDonVi = number % 10;
sum = hangChuc + hangDonVi;

console.log("Hàng chục: ", hangChuc);
console.log("Hàng đơn vị: ", hangDonVi);
console.log("Tổng: ", sum);
*/

function calculateEx5() {
  var number, hangChuc, hangDonVi, sum, result, chuc, donVi;

  number = document.getElementById("number").value;
  chuc = document.getElementById("chuc");
  donVi = document.getElementById("donvi");
  result = document.getElementById("result");

  hangChuc = Math.floor(Number(number) / 10);
  chuc.value = hangChuc;
  hangDonVi = Number(number) % 10;
  donVi.value = hangDonVi;

  sum = hangChuc + hangDonVi;
  result.value = sum;
}
 