export const fetchItems = () => {
  type: "FETCH_ITEMS"
};

export const receiveItems = (items) => {
  type: "RECEIVE_ITEMS",
  items
};

// export const sortItems = (sort) => {
//   type: "SORT_ITEMS",
//   sort: sort
// };
