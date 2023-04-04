import { some, none, fromNullable } from 'fp-ts/lib/Option.js';
import _ from 'lodash';

// Create a function that divides a / b and returns a option if the division returns NaN
export const safeDivision = (a, b) => {
  const result = a / b;
  if (Number.isNaN(result)) {
    return none;
  }
  return some(result);
};

// Create a function that takes an array and return the first item of the array as option
export const head = (xs) => {
  const el = xs[0];
  if (!_.isNil(el)) {
    return some(el);
  }
  return none;
};
// const head = (xs) => fromNullable(xs[0])

// Create a function that takes an array and return the last item of the array as option
export const last = (xs) =>
  !_.isNil(xs[xs.length - 1]) ? some(xs[xs.length - 1]) : none;
// const last = (xs) => fromNullable(xs[xs.length - 1])

// Create a function that takes an index and an array and return the value in that index as option
//export const safeGet = (i, xs) => fromNullable(xs[i]);
export const safeGet = (i, xs) => (!_.isNil(xs[i]) ? some(xs[i]) : none);

// Create a function that takes an object and a key(string) and return the value for that key as option
// export const safeGetOBJ = (obj, key) => fromNullable(obj[key])
export const safeGetOBJ = (key, obj) =>
  !_.isNil(obj[key]) ? some(obj[key]) : none;

// Create a function that takes an array and item and returns the index of that item as option
export const safeFindIndex = (xs, item) => {
  const itemFound = xs.findIndex((x, i) => _.isEqual(x, item));
  if (itemFound !== -1) {
    return some(itemFound);
  }
  return none;
};

// Create a function that takes an array and returns all the sub arrays as option
export const getSubArrays = (xs) => {
  const arrays = xs.filter((x) => _.isArray(x));
  if (arrays.length > 0) {
    return some(arrays);
  }
  return none;
};
// Create a function that takes an string and returns all the uppercase caracters as option
export const getUppercase = (s) => {
  const filtered = s
    .trim()
    .replaceAll(' ', '')
    .split('')
    .filter((letter) => letter === letter.toUpperCase())
    .join('');
  if (filtered.length > 0) {
    return some(filtered);
  }
  return none;
};

// Create a function that takes an string and returns all the lowercase caracters as option
export const getLowercase = (s) => {
  const filtered = s
    .trim()
    .replaceAll(' ', '')
    .split('')
    .filter((letter) => letter === letter.toLowerCase())
    .join('');
  if (filtered.length > 0) {
    return some(filtered);
  }
  return none;
};

// Create a function that takes an string and returns all the vowels caracters as option
export const getVowels = (s) => {
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }

  const filtered = s.split('').filter(isVowel).join('');
  if (filtered.length > 0) {
    return some(filtered);
  }
  return none;
};
