const formEl = document.getElementById("form");
console.log(formEl);

const calculate = document.getElementById("calculate");
console.log(calculate);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const totalAmount = document.getElementById("total-amount").value;
  console.log(totalAmount);

  const countryCode = document.getElementById("countryCode").value;
  console.log(countryCode);

  const totalmembers = document.getElementById("total-member").value;
  console.log(totalmembers);

  const splitAmount = parseFloat(totalAmount / totalmembers).toFixed(2);
  console.log(splitAmount);
  const splitAmountEl = document.getElementById("splitAmount");
  splitAmountEl.value = splitAmount;

  // Create an object to represent the data
  const formData = {
    totalAmount: totalAmount,
    totalmembers: totalmembers,
    splitAmount: splitAmount,
    countryCode: countryCode,
  };

  const localStorageKey = "history-data";

  //to get a localStorage Data
  const existingHistory = localStorage.getItem(localStorageKey);

  console.log(existingHistory);

  //to parrse that data
  const existingHistoryArray = JSON.parse(existingHistory);

  //creating empty array to push my values
  const newHistory = [];

  if (existingHistoryArray) {
    existingHistoryArray.push(formData);

    localStorage.setItem(localStorageKey, JSON.stringify(existingHistoryArray));
  } else {
    newHistory.push(formData);

    localStorage.setItem(localStorageKey, JSON.stringify(newHistory));
  }

  getAllHistory();
});

function getAllHistory() {
  const localStorageKey = "history-data";

  const historyData = localStorage.getItem(localStorageKey);

  const historyDataArr = JSON.parse(historyData);

  const historyCardEl = document.querySelector("#history");

  if (historyDataArr && historyDataArr.length > 0) {
    historyCardEl.classList.remove("hidden");

    const tableEl = document.querySelector("#historyTable");

    tableEl.innerHTML = "";

    const newFinalValue = [];

    historyDataArr.map((formData) => {
      const trEl = document.createElement("tr");
      const totalAmoutEl = document.createElement("td");
      const totalMembersEl = document.createElement("td");
      const splitAmountEl = document.createElement("td");
      const currencyTypeEl = document.createElement("td");

      //adding style and text content in table
      totalAmoutEl.classList.add("registereddata");
      totalAmoutEl.textContent = formData.totalAmount;

      totalMembersEl.classList.add("registereddata");
      totalMembersEl.textContent = formData.totalmembers;

      splitAmountEl.classList.add("registereddata");
      splitAmountEl.textContent = formData.splitAmount;

      currencyTypeEl.classList.add("registereddata");
      currencyTypeEl.textContent = formData.countryCode;

      // showing elements in UI

      trEl.append(totalAmoutEl, totalMembersEl, splitAmountEl, currencyTypeEl);

      newFinalValue.push(trEl);
    });

    newFinalValue.forEach((el) => tableEl.prepend(el));
  } else {
    signUpCardEl.classList.add("hidden");
  }
}
getAllHistory();
