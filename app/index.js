import products from "./data.js";
//  increase the price by a dollor.
const increasedProduct = products.map((product) => {
  // be sure to spread so as not mutate the orginal array..
  const ret = { ...product };

  ret.price = `$${Number(ret.price.slice(1)) + 1}`;
  return ret;
});

console.log(increasedProduct);

//  show the product if they are in stock.
const inStockProduct = products.filter(({ stocked }) => stocked);

console.log(inStockProduct);

// Add a random number that will be qty property if the stocked is true.

const addProperty = products.map((product) => {
  const ret = { ...product };

  if (ret.stocked) {
    ret.qty = getRandomInt(2, 100);
  }

  return ret;
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(addProperty);

//  add an id to all product. id is going to one more than index.

const idProduct = products.map((product, index) => {
  const ret = { ...product, ...{ id: index + 1 } };
  // we can do ret.id = index + 1 and forget about add it in the spread
  return ret;
});
console.log(idProduct);

// reduce with array of number.
const nums = [1, 2, 6, 9, 78];

const total = nums.reduce((sum, num) => sum + num);
console.log(total);

const totalPrice = products.reduce(
  (total, product) => total + Number(product.price.slice(1)),
  0
); // the zero is to initialize the total, if not javascript /// will take first object as total

console.log(totalPrice);

const totalInventoryvalue = addProperty.reduce(
  (total, { price, qty }) => total + price.slice(1) * qty,
  0
);

console.log(totalInventoryvalue);
