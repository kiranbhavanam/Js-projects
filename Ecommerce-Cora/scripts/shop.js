import toggleNav from "./script.js";
import { renderCards, addItem } from "./cartData.js";
const cardContainer = document.querySelector(".card-container");
renderCards(cardContainer);
addItem(cardContainer);
