// hàm dom
function dom(selector) {
  return document.querySelector(selector);
}

// Hàm tính điểm trung bình của 2 khối
const calcMark = (...marks) => {
  // tạo biến number để lấy index số điểm

  // dùng hàm reduce để tính điểm tb
  let total = marks.reduce((total1, mark, index) => {
    return total1 + mark;
  }, 0);

  let index = marks.reduce((total, mark, index1) => {
    let indexx = 0;
    return (indexx = index1 + 1);
  }, 0);
  return total / index;
};

//==== khối 1
let khoi1 = (dom("#btnKhoi1").onclick = () => {
  // dom lấy dữ liệu từ khối 1
  let toan = dom("#inpToan").value * 1;
  let ly = dom("#inpLy").value * 1;
  let hoa = dom("#inpHoa").value * 1;
  
  // xử lý
  let total = calcMark(toan, ly, hoa);

  // xuất kq
  dom("#tbKhoi1").innerHTML = `${total}.00`;
});

// khối 2
let khoi2 = (dom("#btnKhoi2").onclick = () => {
  // dom lấy thông tin ng dùng
  let van = dom("#inpVan").value * 1;
  let su = dom("#inpSu").value * 1;
  let dia = dom("#inpDia").value * 1;
  let eng = dom("#inpEnglish").value * 1;
  

  // xử lý
  let total = calcMark(van,su,dia,eng)

   // xuất kq
   dom("#tbKhoi2").innerHTML = `${total}.00`;

});
