/*
 * Input: Chiều dài, chiều rộng
 *
 * Bước 1: Tạo biến chieuDai, chieuRong, chuVi, dienTich
 * Bước 2: Gán giá trị cho biến chieuDai, chieuRong, chuVi, dienTich
 * Bước 3: Tính theo công thức: chu vi = (chiều dài + chiều rộng) * 2; diện tích = chiều dài * chiều rộng
 * Bước 4: In kết quả ra console
 *
 * Output: Diện tích, chu vi hình chữ nhật
 */

/*
var chieuDai, chieuRong, chuVi, dienTich;

chieuDai = Number(prompt("Nhập vào chiều dài:"));
chieuRong = Number(prompt("Nhập vào chiều rộng:"));

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chiều dài:", chieuDai);
console.log("Chiều rộng:", chieuRong);
console.log("Chu vi:", chuVi);
console.log("Diện tích:", dienTich);
*/

function calculateEx4() {
  var chieuDai, chieuRong, chuVi, dienTich, resultC, resultS;

  chieuDai = document.getElementById("height").value;
  chieuRong = document.getElementById("width").value;

  resultC = document.getElementById("result--c");
  resultS = document.getElementById("result--s");

  chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
  dienTich = Number(chieuDai) * Number(chieuRong);

  resultC.value = chuVi;
  resultS.value = dienTich;
}
