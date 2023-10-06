// let eventlisteneradded = false;
export default function toggleNav() {
  const closeNav = document.querySelector(".cross");
  const bar = document.querySelector(".bars");
  const navbar = document.getElementById("navbar");
  // console.log("event listener added");
  // if (!eventlisteneradded) {
  bar.addEventListener("click", () => {
    console.log("clkied", bar);
    navbar.classList.toggle("active");
  });
  closeNav.addEventListener("click", () => {
    navbar.classList.toggle("active");
    console.log("x clicked");
  });
}
// eventlisteneradded = true;
// }

toggleNav();
