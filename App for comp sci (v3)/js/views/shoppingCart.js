// VARIABLES
// keep track of shopping cart and how much stuff it has
let cartQuantityCounter = 0
// keep track of shopping cart total price
let ShoppingCartTotal = 0;

// PRIVATE FUNCTIONS
function incrementShoppingCartIcon(){
    const cartQuantity = document.querySelector('.cart-quantity');
    cartQuantity.innerHTML = cartQuantityCounter += 1;
}

function decrementShoppingCartIcon(){
    const cartQuantity = document.querySelector('.cart-quantity');
    cartQuantity.innerHTML = cartQuantityCounter -= 1;
}

function incrementShoppingCartTotal(btnPrice){
  const cartTotal = document.querySelector('.part__3 .total-price');
  ShoppingCartTotal = ShoppingCartTotal + btnPrice;
  cartTotal.innerHTML = `$${ShoppingCartTotal}`;
}

function decrementShoppingCartTotal(btnPrice){
  // move this return statement to click event for button since we also need this for mian view
  const cartTotal = document.querySelector('.part__3 .total-price');
  ShoppingCartTotal = ShoppingCartTotal - btnPrice
  cartTotal.innerHTML = `$${ShoppingCartTotal}`;

}

function suggestedTools(btnName, arrayOfAvailableTools){


  const suggestions = {
    "A cold place": ["Warmer Jacket", "Lantern"],
    "Warm Mountain": ["Sunscreen", "Bucket Hat"],
    "Cold mountain": ["Warm Jacket", "Lantern"],
    "Remote island": ["Bucket Hat", "Flare gun"],
    "The woods": ["Lantern", "Flare gun"],
    "The forest": ["Flare gun", "Lantern"],
  }

  return arrayOfAvailableTools.filter(tool => 
    suggestions[btnName]?.includes(tool.name)
  )
}

// PUBLIC FUNCTIONS
const ShoppingCart = {
  render(btn, btnName, btnImgSrc, btnPrice) {
    if (btn.innerHTML == "Purchased") {
      btn.innerHTML = "Add to cart";
      btn.style.backgroundColor = "#DAB437";
    } else {
      btn.innerHTML = "Purchased";
      btn.style.backgroundColor = "#d12121";
      const cartPart2 = document.querySelector('.part__2');
      const html = 
      `<div class="cart-item">
        <div class = "img">
          <img src=${btnImgSrc} alt="Description of image">
        </div>
        <div class = "info">
          <h3 class="name"> ${btnName} </h3>
          <h4 class="price" data-total="${btnPrice.slice(1)}"> ${btnPrice} </h4>
        </div>
        <div class = "counters">
          <button class="decrease-btn"> - </button>
          <span class="quantity"> 1 </span>
          <button class="increase-btn"> + </button>
        </div>
        <button class="delete-item-btn"> Delete </button>
      </div>`

      cartPart2.insertAdjacentHTML('beforeend', html);
      incrementShoppingCartIcon();
      incrementShoppingCartTotal(+btnPrice.slice(1));
    }
  },

  renderTools(toolContainer, btnName, arrayOfAvailableTools){
    const arrayOfSuggestedTools = suggestedTools(btnName, arrayOfAvailableTools);
    const itemContainerArray = document.querySelectorAll(".tool-container");

      arrayOfSuggestedTools.forEach(tool => {
        // check whether tool exists
        const hasDuplicate = [...itemContainerArray].some((itemContainer) => itemContainer.querySelector(".name").innerHTML === tool.name)
        if (hasDuplicate) {
          return;
        }
        const itemContainer = `<figure class="item-container tool-container">
            <img src="${tool.imageURL}" alt="location-1" />
            <h3 class="name">${tool.name}</h3>
            <h4>
              <span class="now-price">$${tool.price}</span>
              <span class="cross-price">$${tool.price + 0.5}</span>
            </h4>
            <button class="cart-btn">Add to cart</button>
          </figure>`
    
      toolContainer.insertAdjacentHTML('beforeend', itemContainer);
      })
  },

  SetUpRandomLocations(campingContainer, selectedLocationImgUrl, selectedLocationName, selectedLocationPrice){
    const itemContainer = `<figure class="item-container">
            <img src="${selectedLocationImgUrl}" alt="location-1" />
            <h3 class="name">${selectedLocationName}</h3>
            <h4>
              <span class="now-price">$${selectedLocationPrice}</span>
              <span class="cross-price">$${selectedLocationPrice + 0.1}</span>
            </h4>
            <button class="cart-btn">Add to cart</button>
          </figure>`
    
    campingContainer.insertAdjacentHTML('beforeend', itemContainer);
  },



  increaseButtonClicked(cartItem){
     const btnPrice = cartItem.querySelector(".info .price").dataset.total
     // incrementShoppingCartTotal recieves a number
    incrementShoppingCartTotal(+btnPrice);
    // increase the counter for the cartItem
    cartItem.querySelector(".counters .quantity").innerHTML = +cartItem.querySelector(".counters .quantity").innerHTML+1;
  },

  decreaseButtonClicked(cartItem){
    if (+cartItem.querySelector(".counters .quantity").innerHTML == 1) {
    return;
    }
    const btnPrice = cartItem.querySelector(".info .price").dataset.total
    decrementShoppingCartTotal(+btnPrice);
    // decrease the counter for the cartItem
    cartItem.querySelector(".counters .quantity").innerHTML = (+cartItem.querySelector(".counters .quantity").innerHTML - 1) > 1 ? +cartItem.querySelector(".counters .quantity").innerHTML - 1: 1;
  },

  deleteButtonClicked(cartItem){
    const btnPrice = cartItem.querySelector(".info .price").dataset.total
    const cartItemCounterQuantity = +cartItem.querySelector(".counters .quantity").innerHTML;
    const cartTotal = document.querySelector('.part__3 .total-price');
    const currentCartTotal = cartTotal.innerHTML.slice(1);

    const cartItemTotal = btnPrice * cartItemCounterQuantity;
    const newCartTotal = currentCartTotal - cartItemTotal
    
    cartTotal.innerHTML = `$${newCartTotal}`;
    ShoppingCartTotal = newCartTotal;

    cartItem.remove();

    decrementShoppingCartIcon();
  },

  EnableCart(){
    const cartSection = document.querySelector('#cart')
    if (!cartSection.classList.contains('open')){
      cartSection.classList.add('open');
    }
  },

  DisableCart(){
    const cartSection = document.querySelector('#cart')
    cartSection.classList.remove('open');
  }
};

export default ShoppingCart;
