function nameMenuItem(item) {
  return `Delicious ${item}`;
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(item, ingredientList) {
  for (var i = 0; i < ingredientList.length; i ++) {
    if (item === ingredientList[i]) {
    return;
    };
  };
  ingredientList.push(item);
  return ingredientList;
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  return price - (price * .1);
};

function createRecipe(title, ingredientList, menuType) {
  recipe = {
    title: title,
    ingredients: ingredientList,
    type: menuType,
  };
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
