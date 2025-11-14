let a = 15;
let b = 5;
let c = a + b;
//ghep chuoi
//cách 1 phải thêm dấu cách vào chuỗi
console.log("kết quả " + a + " cộng " + b + " là: " + c);
//cách 2: dùng dấu , nối chuỗi thì tự động kết quả thêm dấu "cách"
console.log("kết quả", a, "cộng", b, "là:", c);
// cách 3:
console.log(`kết quả ${a} cộng ${b} là ${c}`);

console.log(`kết quả %s cộng %s là %s`, a, b, c);
