import { cart } from "./cartData.js";
import toggleNav from "./script.js";
//1.rendering data during run time.
const cartItems = document.querySelector(".cart-items");
// console.log(ulEle.querySelector(".quantity").value);
export function addItems() {
  cart.forEach((product) => {
    const ulEle = document.createElement("ul");
    ulEle.setAttribute("data-id", product.id);
    ulEle.classList.add("cart-row");
    ulEle.innerHTML = `<li class="close"><i class="fa-solid fa-close"></i></li>
<li><img src=${product.img} alt="" /></li>
<li><p class="name">${product.name}</p></li>
<li><input type="number" value="${product.quantity}" class="quantity" /></li>
<li><p class="price">$${product.price}</p></li>
<li><p class="total-price">$${product.total}</p></li>`;
    cartItems.appendChild(ulEle);
    // console.log(ulEle.innerHTML);
    updateQuantity(product.id);
  });
}
updateTotal();
addItems();
//2.Deleting the item when close is clicked.
`Interesting concept of how you can remove an item from the cart 
1. select all the rows by using querySelctorAll(".cart-row")
2.for each item of the row extract the close button using querySelector(".close").
3.add eventlistener to each close button .
4.when clicked the respective item should be removed from the cart row. this will just works at current state
  but when reloaded the item will still be there.
5.To delete the item permanantly find the id of item using item.dataset.id and find the object in the cart that matches the id.
6.splice the cart from index of matching item to 1 element.
7.Dont forget to update the total since we deleted the elements  `;
const cartData = cartItems.querySelectorAll(".cart-row");
cartData.forEach((item) => {
  const close = item.querySelector(".close");
  close.addEventListener("click", (e) => {
    item.remove();
    //remember cart is an array of objects you cannot use cart.indexOf(item.dataset.id)
    const index = cart.indexOf(cart.find((ele) => ele.id === item.dataset.id));
    console.log(index);
    index !== -1 ? cart.splice(index, 1) : null;
    localStorage.setItem("cartArray", JSON.stringify(cart));
    updateTotal();
  });
});
//3.updating the price and total cost when quantity is updated.
const quantityEleList = document.querySelectorAll(".quantity");
quantityEleList.forEach((quantityEle, index) => {
  quantityEle.addEventListener("input", () => {
    updateQuantity(cart[index].img);
  });
});
function updateQuantity(id) {
  const item = cartItems.querySelector(`[data-id="${id}"]`);
  // console.log(id, ":", cart[0].id);
  const obj = cart.find((obj) => obj.id === id);
  const price = obj.price;
  const quantityStr = item.querySelector(".quantity").value;
  const quantity = Number(quantityStr);
  const totalPriceEle = item.querySelector(".total-price");
  // console.log(price, quantity);
  totalPriceEle.textContent = quantity > 0 ? `$${quantity * price}` : `$0`;
  updateTotal();
}
function updateTotal() {
  const cartTotal = document.querySelector(".cart-total");
  const listItems = cartItems.querySelectorAll(".total-price");
  const listItemsArray = [...listItems];
  cartTotal.innerHTML = listItemsArray.reduce((acc, ele) => {
    // console.log(acc);
    const priceOfEle = Number(ele.textContent.replace(/[$]/, ""));

    return priceOfEle + acc;
  }, 0);
  document.querySelector(".total").textContent = `${cartTotal.textContent}`;
}
