const formEl = document.forms.loginForm;
console.log(formEl);
const userName = document.querySelector("#userName");
//console.log(userName);

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  console.log(`JSON Body (login-Info): ${jsonData}`);
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
console.log(signUpForm);
const signUpBtnEl = document.getElementById("signUp");
// console.log(signUpBtnEl);

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(signUpForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  console.log(`JSON Body (signUp-Info): ${jsonData}`);
  alert(`Welcome Your Sucessfully Registered In FaceBook`);
});

signUpBtnEl.addEventListener("click", () => {
  setTimeout(() => {
    createPageEl.className = "hidden";
    formEl.className = "block";
  }, 1000);
});
