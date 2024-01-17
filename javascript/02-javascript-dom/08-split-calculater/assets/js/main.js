const formEl = document.getElementById("form");
console.log(formEl);

const calculate = document.getElementById("calculate");
console.log(calculate);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const totalAmount = document.getElementById("total-amount").value;
  console.log(totalAmount);
  const totalmembers = document.getElementById("total-member").value;
  console.log(totalmembers);
  const splitAmount = totalAmount / totalmembers;
  console.log(splitAmount);
  const splitAmountEl = document.getElementById("splitAmount");
  splitAmountEl.value = splitAmount;
  formEl.reset();
});
