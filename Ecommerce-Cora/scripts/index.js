import toggleNav from "./script.js";
import { renderCards, addItem } from "./cartData.js";
const cardContainer = document.querySelector(".card-container");
renderCards(cardContainer);
`when the cart icon is clicked  the item should be added to cart.
1.select all the items `;

addItem(cardContainer);
// const banner = document.getElementById("banner");
// console.log(banner);
