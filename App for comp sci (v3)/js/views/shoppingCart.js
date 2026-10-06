const ShoppingCart = {
  render(elementOfButton, nameOfElement) {
    console.log(elementOfButton, nameOfElement);
    if (elementOfButton.innerHTML == "Purchased") {
      elementOfButton.innerHTML = "Add to cart";
      elementOfButton.style.backgroundColor = "#DAB437";
    } else {
      elementOfButton.innerHTML = "Purchased";
      elementOfButton.style.backgroundColor = "#d12121";
    }
  },
};

export default ShoppingCart;
