const formEl = document.forms.loginForm;
/* console.log(formEl); */
const userName = document.querySelector("#userName");
//console.log(userName);

const registeredUserEl = document.getElementById("registeredUser");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const loginObjData = Object.fromEntries(formData);
  console.log(loginObjData);
  const jsonData = JSON.stringify(loginObjData);
  console.log(`JSON (login-Info): ${jsonData}`);
};

const handleFormData = (e) => {
  const formData = e.formData;

  const div = document.createElement("div");

  div.className = "max-w-sm mx-auto  border rounded p-2  ";

  const textNode = document.createTextNode(
    "The email address or mobile number you entered isn't connected to an account. You can create your new account"
  );

  div.append(textNode);

  userName.parentNode.insertBefore(div, userName.nextSibling);

  setTimeout(() => {
    div.parentNode.removeChild(div);
  }, 3000);
};

formEl.addEventListener("submit", handleSubmit);

formEl.addEventListener("formdata", handleFormData);

const createBtnEl = document.getElementById("createBtn");

const createPageEl = document.getElementById("createPage");

createBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  formEl.className = "hidden";

  createPageEl.removeAttribute("class");
});

const signUpForm = document.forms.signupForm;
/* console.log(signUpForm); */

const signUpBtnEl = document.getElementById("signUp");
// console.log(signUpBtnEl);

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const registeredUserEl = document.getElementById("registeredUser");
  registeredUserEl.removeAttribute("class");

  const formData = new FormData(signUpForm);
  const signupObjData = Object.fromEntries(formData);
  console.log(signupObjData);
  const jsonData = JSON.stringify(signupObjData);
  console.log(`JSON (signUp-Info): ${jsonData}`);

  const tdE1 = document.getElementById("firstName");
  const tdE2 = document.getElementById("surName");
  const tdE3 = document.getElementById("e-mail");
  const tdE4 = document.getElementById("d-o-b");

  tdE1.textContent = signupObjData.firstName;
  tdE2.textContent = signupObjData.surName;
  tdE3.textContent = signupObjData.email;
  tdE4.textContent = signupObjData.dob;

  alert(`Welcome Your Sucessfully Registered In FaceBook`);

  signUpForm.reset();
});

/* signUpBtnEl.addEventListener("submit", () => {
  setTimeout(() => {
    createPageEl.className = "hidden";
    formEl.className = "block";
  }, 10000);
}); */
