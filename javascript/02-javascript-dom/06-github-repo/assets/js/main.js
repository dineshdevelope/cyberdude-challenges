// Write your javascript code here
const formEl = document.getElementById("thumbnail");
const urlEl = document.getElementById("url");
const mainEl = document.getElementById("main");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const urlID = urlEl.value.split("=")[1];
  const imgEl = document.createElement("img");
  imgEl.src = `https://i.ytimg.com/vi/${urlID}/maxresdefault.jpg`;
  imgEl.classList.add("p-5");
  mainEl.prepend(imgEl);
  formEl.reset();
});
