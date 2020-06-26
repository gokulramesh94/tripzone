export const filterData = (items, key, value) => {
  return items.filter(item => {
    return item[key].toUpperCase() === value.toUpperCase();
  });
};
