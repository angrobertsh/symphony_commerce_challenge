export const fetchItems = () => ({
  type: "FETCH_ITEMS"
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items
});

export const priceMax = (price) => ({
  type: "PRICE_MAX",
  price
})
