const Model = {
  user: {
    name: "Add to cart",
  },
  
  sound: {
    click: "./sounds/click.mp3",
  },

  setName(name) {
    this.user.name = name;
  },

  availableLocations: {
      location1: {
        imageURL: "./images/location-1.jpg",
        name: "A cold place",
        price: 6,
      },
      location2: {
        imageURL: "./images/location-2.jpg",
        name: "Warm mountain",
        price: 30,
      },
      location3: {
        imageURL: "./images/location-3.jpg",
        name: "Cold mountain",
        price: 60,
      },
      location4: {
        imageURL: "./images/location-4.jpg",
        name: "Remote island",
        price: 15,
      },
      location5: {
        imageURL: "./images/location-5.jpg",
        name: "The woods",
        price: 50,
      },
      location6: {
        imageURL: "./images/location-6.jpg",
        name: "The forest",
        price: 5,
      },
  },

  availableTools: {
      tool1: {
        imageURL: "./images/lantern.png",
        name: "Lantern",
        price: 15,
      },
      tool2: {
        imageURL: "./images/sunscreen.png",
        name: "Sunscreen",
        price: 10,
      },
      tool3: {
        imageURL: "./images/bucket.png",
        name: "Bucket Hat",
        price: 20,
      },
      tool4: {
        imageURL: "./images/jacket.png",
        name: "Warm Jacket",
        price: 30,
      },
      tool5: {
        imageURL: "./images/flare.png",
        name: "Flare gun",
        price: 50,
      },
      tool6: {
        imageURL: "./images/warm-jacket.png",
        name: "Warmer Jacket",
        price: 50,
      },
  }
};

export default Model;
