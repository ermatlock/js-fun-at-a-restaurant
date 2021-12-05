function takeOrder(order, ordersList) {
  if (ordersList.length === 3) {
    return;
  }
  return ordersList.push(order);
}

function refundOrder(orderNumber, ordersList) {
  for (var i = 0; i < ordersList.length; i++) {
    if (ordersList[i].orderNumber === orderNumber) {
      ordersList.splice(i, 1);
    }
  }
}

function listItems(ordersList) {
  var itemsList = [];
  for (var i = 0; i < ordersList.length; i++) {
    itemsList.push(ordersList[i].item);
  }
  return itemsList.join(', ');
}

function searchOrder(orders, item) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === item) {
      return true;
    }
  }
    return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
