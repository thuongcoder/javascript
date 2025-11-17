let toan = parseFloat(prompt("Nhập điểm toán"));
let van = parseFloat(prompt("Nhập điểm văn"));
let av = parseFloat(prompt("Nhập điểm anh văn"));
let dtb = (toan + van + av) / 3;
console.log(`Điểm trung bình 3 môn ${dtb.toFixed(1)}`);
