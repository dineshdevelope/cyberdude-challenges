const blockQuoteEl = document.querySelector("blockquote > p");

const btnEl = document.getElementById("Btn");

const API_URL = "https://api.adviceslip.com/advice";

btnEl.style.display = "none";

btnEl.addEventListener("click", () => {
  window.location.href = "./index.html";
});

async function getAdvicesData() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(`Error Happen ${error}`);
  }
}

const adviceData = await getAdvicesData();

blockQuoteEl.textContent = adviceData.slip.advice;

//display the button after loading the Advise
btnEl.style.display = "block";
