export const orderByProps = (obj, order) => {
  const firstPartArray = [];
  const newObj = { ...obj };
  for (let i = 0; i <= order.length; i++)
    for (const key in obj) {
      if (key === order[i]) {
        firstPartArray.push({ key: key, value: obj[key] });
        delete newObj[key];
      }
    }
  let secondPartArray = [];
  for (const key in newObj) {
    secondPartArray.push({ key: key, value: newObj[key] });
  }
  secondPartArray.sort((a, b) => {
    return a.key.localeCompare(b.key);
  });
  const newArray = [...firstPartArray, ...secondPartArray];
  return newArray;
};

