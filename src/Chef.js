class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning) {
    if (!isMorning) {
      return `Hello, ${customerName}!`;
    } else {
      return `Good morning, ${customerName}!`
    }
  }

  checkForFood(foodItem) {
    for (var i = 0; i < this.restaurant.menus.breakfast.length; i++) {
      if (foodItem === this.restaurant.menus.breakfast[i]) {
        return `Yes, we're serving ${foodItem.name} today!`
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }

};

module.exports = Chef;
