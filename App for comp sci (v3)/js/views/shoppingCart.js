// GLOBAL VARIABLES
const cartSection = document.querySelector('#cart')


const ShoppingCart = {
  render(elementOfButton, nameOfElement, imageURLOfElement) {
    console.log(imageURLOfElement);
    if (elementOfButton.innerHTML == "Purchased") {
      elementOfButton.innerHTML = "Add to cart";
      elementOfButton.style.backgroundColor = "#DAB437";
    } else {
      elementOfButton.innerHTML = "Purchased";
      elementOfButton.style.backgroundColor = "#d12121";
      const part2Element = document.querySelector('.part__2');
      const twoElementsHTML = 
      `<div class="cart-item">
        <div class = "img">
          <img src=${imageURLOfElement} alt="Description of image">
        </div>
        <div class = "info">
          <h3 class="name"> ${nameOfElement} </h3>
          <h4 class="price" data-total="100"> $100 </h4>
        </div>
        <div class = "counters">
          <button class="decrease-btn"> - </button>
          <span class="quantity"> 1 </span>
          <button class="increase-btn"> + </button>
        </div>
        <button class="delete-item-btn"> Delete </button>
      </div>`

      part2Element.insertAdjacentHTML('beforeend', twoElementsHTML);
    }
  },

  EnableCart(){
    if (!cartSection.classList.contains('open')){
      cartSection.classList.add('open');
    }
  },

  DisableCart(){
    cartSection.classList.remove('open');
  }
};

export default ShoppingCart;
