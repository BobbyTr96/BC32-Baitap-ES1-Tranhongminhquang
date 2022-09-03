const hoverFuct = () => {
  // b1 dom lấy nội dung text từ thẻ h2
  let texts = document.querySelector(".heading").innerHTML;

  // B2 : dùng spead operator tách chữ
  let separates = [...texts];

  // B3 : tạo thẻ span và đưa thẻ span chứ chữ cái đã tách vào thẻ span
  let create = separates.reduce((created, textt) => {
    return (created += `<span>${textt}</span>`);
  }, "");

  // b4 : cập nhật lại value thẻ h2 gồm có những thẻ span chứ những chữ cái đã tách
  document.querySelector(".heading").innerHTML = create;
};

hoverFuct();
