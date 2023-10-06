export const cart = JSON.parse(localStorage.getItem("cartArray")) || [
  {
    id: "img/products/f4.jpg",
    img: "img/products/f4.jpg",
    name: "Adida patterned shirt",
    quantity: 1,
    price: 130,
    total: 130,
  },
  {
    id: "img/products/f5.jpg",
    img: "img/products/f5.jpg",
    name: "Adidas patterned shirt",
    quantity: 1,
    price: 100,
    total: 100,
  },
  {
    id: "img/products/f6.jpg",
    img: "img/products/f6.jpg",
    name: "puma patterned shirt",
    quantity: 2,
    price: 150,
    total: 300,
  },
];
localStorage.setItem("cartArray", JSON.stringify(cart));

export function pushItem(id, qu) {
  const matchingItem = cart.find((item) => item.id === id);
  matchingItem
    ? matchingItem.quantity++
    : cart.push({
        id: id,
        img: id,
        name: "Adida patterned shirt",
        quantity: qu,
        price: 130,
        total: 130,
      });
  // console.log(cart);
  localStorage.setItem("cartArray", JSON.stringify(cart));
}

export function renderCards(cardContainer) {
  for (let i = 1; i < 9; i++) {
    const card = document.createElement("div");
    card.classList.add("item-card");
    card.setAttribute(`data-id`, `img/products/f${i}.jpg`);
    card.innerHTML = ` 
<img src="img/products/f${i}.jpg" alt="" />
<p class="item-brand">adidas</p>
<p class="item-name">Cartoon Astronaut T-shirts</p>
<div>
  <p class="item-price">$78</p>
  <i class="fa-solid fa-cart-shopping cart-icon"></i>
</div>`;
    cardContainer.appendChild(card);
  }
}

export function addItem(cardContainer) {
  const cards = cardContainer.querySelectorAll(".item-card");
  cards.forEach((card) => {
    const icon = card.querySelector(".cart-icon");
    icon.addEventListener("click", () => {
      window.location.href = "./cart.html";
      console.log("icon clicked:", card.dataset.id);
      pushItem(card.dataset.id, 1);
    });
  });
}
