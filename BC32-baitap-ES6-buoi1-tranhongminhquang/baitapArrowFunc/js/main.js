// mảng màu
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
// hàm dom
const dom = (selector) => {
  return document.querySelector(selector);
};

// === YC1 : khi load trang thì hàm đc gọi và thêm các thẻ button vào html
const colorButton = () => {
  dom("#colorContainer").innerHTML = `
      <button class ="color-button pallet" data-type="pallet"></button>
      <button  class ="color-button viridian" data-type="viridian"></button>
      <button class ="color-button pewter" data-type="pewter"></button>
      <button class ="color-button cerulean" data-type="cerulean"></button>
      <button class ="color-button vermillion" data-type="vermillion"></button>
      <button class ="color-button lavender" data-type="lavender"></button>
      <button class ="color-button celadon" data-type="celadon"></button>
      <button class ="color-button saffron" data-type="saffron"></button>
      <button class ="color-button fuschia" data-type="fuschia"></button>
      <button class ="color-button cinnabar" data-type="cinnabar"></button>
      `;
};
colorButton();

// === YC 2 : đổi màu nhà khi click vào button
// b1 tạo func đổi màu nhà
const colorChange = (
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10
) => {
  dom("#house").classList.add(color1);
  dom("#house").classList.remove(
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    color8,
    color9,
    color10
  );
};
// hàm thêm pointer
function pointer(
  selector,
  selector2,
  selector3,
  selector4,
  selector5,
  selector6,
  selector7,
  selector8,
  selector9,
  selector10,
  className
) {
  dom(selector2).classList.remove(className);
//   dom(selector3).classList.remove(className);
//   dom(selector4).classList.remove(className);
//   dom(selector5).classList.remove(className);
//   dom(selector6).classList.remove(className);
//   dom(selector7).classList.remove(className);
//   dom(selector8).classList.remove(className);
//   dom(selector9).classList.remove(className);
//   dom(selector10).classList.remove(className);
  dom(selector).classList.add(className);
}

// function pointer(selector,className){
//     dom(selector).classList.add(className);

// }

//B2 dom tới thẻ cha có id :colorContainer để lắng nghe sự kiện click , lợi dụng sự kiện bubbling để chọn nút màu
dom("#colorContainer").addEventListener("click", (evt) => {
  const color = evt.target.getAttribute("data-type");
  if (color === "viridian") {
    pointer(
      ".viridian",
      ".pallet",
      ".pewter",
      ".cerulean",
      ".vermillion",
      ".lavender",
      ".celadon",
      ".saffron",
      ".fuschia",
      ".cinnabar",
      "active"
    );
    colorChange(
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "pallet") {
    pointer(
      ".pallet",
      ".viridian",
      ".pewter",
      ".cerulean",
      ".vermillion",
      ".lavender",
      ".celadon",
      ".saffron",
      ".fuschia",
      ".cinnabar",
      "active"
    );
    colorChange(
      "pallet",
      "viridian",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "pewter") {
    colorChange(
      "pewter",
      "viridian",
      "pallet",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "cerulean") {
    colorChange(
      "cerulean",
      "viridian",
      "pallet",
      "pewter",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "vermillion") {
    colorChange(
      "vermillion",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "lavender",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "lavender") {
    colorChange(
      "lavender",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "celadon",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "celadon") {
    colorChange(
      "celadon",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "saffron",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "saffron") {
    colorChange(
      "saffron",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "fuschia",
      "cinnabar"
    );
  } else if (color === "fuschia") {
    colorChange(
      "fuschia",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "cinnabar"
    );
  } else if (color === "cinnabar") {
    colorChange(
      "cinnabar",
      "viridian",
      "pallet",
      "pewter",
      "cerulean",
      "vermillion",
      "lavender",
      "celadon",
      "saffron",
      "fuschia"
    );
  }
});
