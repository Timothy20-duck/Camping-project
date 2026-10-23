import Model from "./model.js";
import shoppingCartView from "./views/shoppingCart.js";


const Controller = {
  AddToCartClickedEvent() {
    document.querySelectorAll(".product__container").forEach(container => {
      container.addEventListener("click", (e) => {
      const btn = e.target.closest(".cart-btn");
      if (!btn) return;

      if (btn.innerHTML === "Add to cart"){
        const btnName = btn.parentElement.querySelector(".name").innerHTML;
        const btnImgSrc = btn.parentElement.querySelector("img").getAttribute('src');
        const btnPrice = btn.parentElement.querySelector(".now-price").innerHTML;
        const toolContainer = document.querySelector(".tool__container");

        Model.setName("Purchased");
        shoppingCartView.render(btn, btnName, btnImgSrc, btnPrice);
        shoppingCartView.renderTools(toolContainer, btnName, Object.values(Model.availableTools));
      }
      else if (btn.innerHTML === "Purchased"){
        const cartItemName = btn.parentElement.querySelector(".name").innerHTML;
        const cartPart2 = document.querySelector('.part__2');
        const CartItems = cartPart2.querySelectorAll('.name');
        const purchasedCartItem = Array.from(CartItems).find(child => child.innerHTML.trim() === cartItemName.trim());
        const cartItem = purchasedCartItem.closest(".cart-item");
        Model.setName("Add to cart");
        shoppingCartView.render(btn, cartItemName);
        shoppingCartView.deleteButtonClicked(cartItem);
      }
     }); 
    });   
  },      
}; 

document.addEventListener('DOMContentLoaded', () => {
  let arrayOfAvailableLocations = Object.values(Model.availableLocations);
  const campingContainer = document.querySelector(".camping__container");
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * arrayOfAvailableLocations.length);
    const selectedLocation = arrayOfAvailableLocations[randomNumber];
    arrayOfAvailableLocations.splice(randomNumber, 1)
    shoppingCartView.SetUpRandomLocations(campingContainer, selectedLocation.imageURL, selectedLocation.name, selectedLocation.price);
  }
})

document.querySelector(".cart__container").addEventListener("click", (e) => {
  if (e.target.matches('.increase-btn')){
    const cartItem = e.target.closest(".cart-item");
    shoppingCartView.increaseButtonClicked(cartItem);
  }

  if (e.target.matches('.decrease-btn')){
    const cartItem = e.target.closest(".cart-item");
    shoppingCartView.decreaseButtonClicked(cartItem);
  }

  if (e.target.matches('.delete-item-btn')){
    const cartItem = e.target.closest(".cart-item");
    const cartItemName = cartItem.querySelector(".name").innerHTML.trim();
    const camping__container = document.querySelector(".camping__container");
    const tool__container = document.querySelector(".tool__container");
    const campingContainerChildren = camping__container.querySelectorAll("figure");
    const toolContainerChildren = tool__container.querySelectorAll("figure");
    const mergedList = [...campingContainerChildren, ...toolContainerChildren];
    const btn = Array.from(mergedList).find(child => child.querySelector(".name").innerHTML.trim() === cartItemName);
    if (btn.querySelector(".cart-btn").innerHTML === "Purchased"){
      btn.querySelector(".cart-btn").innerHTML = "Add to cart";
      btn.querySelector(".cart-btn").style.backgroundColor = "#DAB437";
    }
    shoppingCartView.deleteButtonClicked(cartItem);
  }
})

document.querySelector(".cart").addEventListener("click", () => {
  shoppingCartView.EnableCart(); 
})

document.querySelector(".close-cart").addEventListener("click", () => {
  shoppingCartView.DisableCart();
})

Controller.AddToCartClickedEvent();


