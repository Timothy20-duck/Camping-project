import Model from "./model.js";
import shoppingCartView from "./views/shoppingCart.js";

// console.log(Model, MainView);
const Controller = {
  AddToCartClickedEvent() {
    document.querySelectorAll(".cart-btn").forEach((button) => {
      button.addEventListener("click", () => {
        Model.setName("Purchased");
        console.log("e");
        const nameOfElement =
          button.parentElement.querySelector(".name").innerHTML;
        // console.log(nameElement);
        shoppingCartView.render(button, nameOfElement);

        // MainView.render(Model.user, nameElement);
        // mainView.render(Model)
      });
    });
  },
};

Controller.AddToCartClickedEvent();
