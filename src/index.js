//@ts-check

/**
 * player name ==>
 * @type {string}
 */
const playerName = "Jon Doe";

/**
 * array of numbers ==>
 * @type {Array<number>}
 */
const grades = [90, 80, 80];

/**
 * todo object ==>
 * @type {{id: number|string, test:string}}
 */
const todo = {
  id: 9,
  test: "test"
};

/**
 *  calculate tax func ==>
 * @param {number} amount - total amount
 * @param {number} tax  - Tax percentage
 *  @return {string} - total with $ sign
 */
const calculate = (amount, tax) => {
  return `${amount + tax * amount}`;
};

console.log(calculate(100, 0.5));
