const user = [...formData.getAll("E-mail - phone")];
const password = [...formData.getAll("password")];
console.log(`Your user Name is ${user}`);
console.log(`Your Password is ${password}`);
const nameGreet = document.getElementById("nameGreet");

//form handling
const nameEl = formEl.elements.email;
console.log(nameEl);
nameEl.addEventListener("input", (e) => {
  nameGreet.innerText = e.target.value;
});

//ratio handling
const ratioBtn = document.forms.createPage.elements.gender;
console.log(ratioBtn);

const genderEl = document.getElementById("gender");
console.log(genderEl);
genderEl.addEventListener("change", (e) => {
  console.log(e.target.value);
});

//ratio task
genderEl.addEventListener("change", (e) => {
  const gender = e.target.value;
  if (gender === "male") {
    setTimeout(() => alert("Your Male"), 2000);
  } else alert("your not male");
});

//line 15
//to covert JSON format

//traditional way
const jsonData = JSON.stringify(Object.fromEntries(formData));
console.log(jsonData);

//old way
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function () {
  console.log(xhr.responseText);
  const obj = JSON.parse(xhr.responseText);
  console.log(obj);
  document.getElementById("response").innerText = obj.data[0].first_name;
};
xhr.send();
