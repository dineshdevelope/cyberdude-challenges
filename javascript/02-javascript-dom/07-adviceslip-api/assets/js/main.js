const blockQuoteEl = document.querySelector("blockquote");

//console.log(blockQuoteEl);

const btnEl = document.getElementById("Btn");
//console.log(btnEl);

const xhr = new XMLHttpRequest();

xhr.responseType = "json";

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    blockQuoteEl.textContent = xhr.response.slip.advice;
  }
};

xhr.open("GET", "https://api.adviceslip.com/advice");
xhr.send();
