import Model from "./model.js";
import shoppingCartView from "./views/shoppingCart.js";


const Controller = {
  AddToCartClickedEvent() {
    document.querySelectorAll(".cart-btn").forEach((button) => {
      button.addEventListener("click", () => {
        Model.setName("Purchased");
        const nameOfElement = button.parentElement.querySelector(".name").innerHTML;
        const imageURLOfElement = button.parentElement.querySelector("img").getAttribute('src');
        shoppingCartView.render(button, nameOfElement, imageURLOfElement);
      });
    });
  },
};

document.querySelector(".cart").addEventListener("click", () => {
  shoppingCartView.EnableCart() 
})

document.querySelector(".close-cart").addEventListener("click", () => {
  shoppingCartView.DisableCart() 
})

Controller.AddToCartClickedEvent();


