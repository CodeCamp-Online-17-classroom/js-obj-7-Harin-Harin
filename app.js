let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function total(xxx) {
  let sum = 0;
  for (let key in xxx) {
    if (xxx.hasOwnProperty(key)) {
      sum += xxx[key];
    }
  }
  return sum;
}
console.log('Total salaries =' ,total(salaries))
