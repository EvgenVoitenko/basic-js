const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(A) {
  if ((A === null) || (A === "number") || (typeof (A) !== "string")) return false;
  if ((Number(A) > 15) || (Number(A) <= 0)) return false;
  if (isNaN(A)) return false;
  return (Math.ceil(Math.log((MODERN_ACTIVITY / A)) / (0.693 / HALF_LIFE_PERIOD)));

}

module.exports = {
  dateSample
};
