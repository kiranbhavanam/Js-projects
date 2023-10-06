import { cart, pushItem } from "./cartData.js";
import toggleNav from "./script.js";

const divimages = document.querySelector(".single-pro-image");
const smallImgs = divimages.querySelectorAll("img");
let mainImg = document.querySelector(".main-img");
let newId;
let quantity;
const addToCart = document.querySelector(".addtocart");

//1.Changing the main image when the small image is clicked
smallImgs.forEach((image) => {
  image.addEventListener("click", () => {
    // image.classList.toggle("highlight");
    // console.log("main image when clicked", mainImg.src);
    mainImg.src = image.src;
    newId = mainImg.src.replace(/http:\/\/127.0.0.1:5500\//, "");
    quantity = document.querySelector(".img-quantity").value;
    // pushItem(newId, quantity);
  });
});

addToCart.addEventListener("click", () => {
  // console.log(quantity);
  newId = mainImg.src.replace(/http:\/\/127.0.0.1:5500\//, "");
  quantity = document.querySelector(".img-quantity").value;
  pushItem(newId, quantity);
});

// console.log(matchingItem);

//pushItem();
// console.log(JSON.parse(localStorage.getItem("store")));
