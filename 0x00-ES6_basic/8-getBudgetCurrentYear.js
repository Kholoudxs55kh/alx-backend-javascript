function getCurrentYear () {
  const date = new Date();
  return date.getFullYear();
}
// Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

export default function getBudgetForCurrentYear (income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita
  };
  return budget;
}
