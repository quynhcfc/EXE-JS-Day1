/**
 * Input: Nhập 5 số thực
 *
 * Bước 1: Tạo biến: number1, number2, number3, number4, number5, trungBinhCong
 * Bước 2: Gán giá trị cho: number1, number2, number3, number4, number5
 * Bước 3: Tính trung bình cộng theo công thức (number1 + number2 + number3 + number4 + number5) / 5
 * Bước 4: In kết quả ra console
 *
 * Outut: Trung bình cộng của 5 số thực
 */

/*
var number1, number2, number3, number4, number5, trungBinhCong;

number1 = Number(prompt("Nhập vào số thứ nhất"));
number2 = Number(prompt("Nhập vào số thứ hai"));
number3 = Number(prompt("Nhập vào số thứ ba"));
number4 = Number(prompt("Nhập vào số thứ tư"));
number5 = Number(prompt("Nhập vào số thứ năm"));

trungBinhCong = (number1 + number2 + number3 + number4 + number5) / 5;

console.log("Số thứ nhất:", number1);
console.log("Số thứ hai:", number2);
console.log("Số thứ ba:", number3);
console.log("Số thứ tư:", number4);
console.log("Số thứ năm:", number5);
console.log("Trung bình cộng:", trungBinhCong);
*/

function calculateEx2() {
  var number1, number2, number3, number4, number5, result, trungBinhCong;
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  number3 = document.getElementById("number3").value;
  number4 = document.getElementById("number4").value;
  number5 = document.getElementById("number5").value;
  result = document.getElementById("result--exe2");

  trungBinhCong =
    (Number(number1) +
      Number(number2) +
      Number(number3) +
      Number(number4) +
      Number(number5)) /
    5;
  result.value = trungBinhCong;
}
