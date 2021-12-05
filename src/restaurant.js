function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'breakfast') {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++){
      if (restaurant.menus.breakfast[i] === menuItem) {
        return;
      }
    }
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch') {
    for (var i = 0; i < restaurant.menus.lunch.length; i++){
      if (restaurant.menus.lunch[i] === menuItem) {
        return;
      }
    }
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner') {
    for (var i = 0; i < restaurant.menus.dinner.length; i++){
      if (restaurant.menus.dinner[i] === menuItem) {
        return;
      }
    }
    restaurant.menus.dinner.push(menuItem);
  }
// alternate refactored version
  // if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
  //   restaurant.menus.breakfast.push(menuItem);
  // } else if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
  //     restaurant.menus.lunch.push(menuItem);
  // } else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
  //     restaurant.menus.dinner.push(menuItem);
  // }
};

function removeMenuItem(restaurant, menuItemName, type) {
  if (type === 'breakfast') {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === menuItemName) {
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${type} menu!`
      }
    }
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
    } else if (type === 'lunch') {
      for (var i = 0; i < restaurant.menus.lunch.length; i++) {
        if (restaurant.menus.lunch[i].name === menuItemName) {
          restaurant.menus.lunch.splice(i, 1);
          return `No one is eating our ${menuItemName} - it has been removed from the ${type} menu!`
      }
    }
      return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
    } else if (type === 'dinner') {
      for (var i = 0; i < restaurant.menus.dinner.length; i++) {
        if (restaurant.menus.dinner[i].name === menuItemName) {
          restaurant.menus.dinner.splice(i, 1);
          return `No one is eating our ${menuItemName} - it has been removed from the ${type} menu!`
        }
    }
      return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
    }
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
