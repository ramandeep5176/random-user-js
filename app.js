import getElement from "./utils/getElement.js";
const URL = "https://randomuser.me/api/";

const img = getElement(".user-img");
const btn = getElement(".btn");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];
// ruf

const getUser = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  // console.log(response);
  // itterate object and get single user
  const singleUser = response.results[0];
  // console.log(singleUser);
  const { phone, email } = singleUser;
  const { medium: image } = singleUser.picture;
  const { password } = singleUser.login;
  const { first, last } = singleUser.name;
  const {
    dob: { age },
  } = singleUser;
  const {
    street: { number, name },
  } = singleUser.location;
  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
  // console.log(gender, email, phone, cell, nat, title, first, last, medium);
};

const display = (singleUser) => {
  img.src = singleUser.image;
  title.textContent = `my name is  `;
  value.textContent = singleUser.name;
// all btns
btns[0].classList.add('active')


// all btns end


};

// show user
const show = async () => {
  const singleUser = await getUser();
  display(singleUser);
};
// show user end

btn.addEventListener("click", show);
window.addEventListener("DOMContentLoaded", show);

// new
