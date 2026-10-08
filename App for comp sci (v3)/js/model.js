const Model = {
  user: {
    name: "Add to cart",
    age: 25,
  },

  setName(name) {
    this.user.name = name;
  },

  availableLocations: {
      location1: {
        imageURL: "./images/camping.jpg",
        name: "location 1",
        price: 1,
      },
      location2: {
        imageURL: "./images/camping.jpg",
        name: "location 2",
        price: 2,
      },
      location3: {
        imageURL: "./images/camping.jpg",
        name: "location 3",
        price: 3,
      },
      location4: {
        imageURL: "./images/camping.jpg",
        name: "location 4",
        price: 4,
      },
      location5: {
        imageURL: "./images/camping.jpg",
        name: "location 5",
        price: 5,
      },
      location6: {
        imageURL: "./images/camping.jpg",
        name: "location 6",
        price: 6,
      },
  }
};

export default Model;
