//Calling The API
// let data = new XMLHttpRequest();

//Get And Parse the data

//Show in UI

//Promises
const decition = new Promise((reslove, reject) => {
  //let resign;
  let resign = false;

  // 3 sec wait
  setTimeout(() => {
    if (resign) {
      reslove({ id: 1, result: "Good Idea" });
    } else {
      reject({ result: "Bad Idea" });
    }
  }, 3000);
});

/* decition
  .then((msg) => {
    console.log(msg);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log(` Finally You did It`);
  }); */

//console.log(decition);

// await
/* async function getdecition() {
  const finalResult = await decition;
  console.log(finalResult);
} */

const blackQuoteEl = document.querySelector("blockquote");

console.log(blackQuoteEl);

const getdecition = async () => {
  try {
    const finalResult = await decition;

    const msg = "King Is King !";
    blackQuoteEl.innerText = msg + JSON.stringify(finalResult);

    console.log(finalResult);
  } catch (error) {
    const msg = "Queen Is Queen !";
    blackQuoteEl.innerText = msg + JSON.stringify(error.result);
  }
};

getdecition();
