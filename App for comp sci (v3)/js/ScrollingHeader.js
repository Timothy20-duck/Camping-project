const nav = document.querySelector("#nav-section");

const header = document.querySelector("header");
// Bottom gives the distance from the viewport’s top to the elements bottom
// if we scroll all the way down we get -570 for rec.bottom. our viewport's top is like 1300 but the element bottom is only like 900.
const rec = header.getBoundingClientRect();

let stickyPoint;

function updateStickyPoint() {
  const rec = header.getBoundingClientRect();
  stickyPoint = rec.bottom + window.scrollY;
}

updateStickyPoint();

window.addEventListener("resize", () => {
  updateStickyPoint();
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= stickyPoint) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

console.log("breh");
