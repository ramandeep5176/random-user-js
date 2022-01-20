import getElement from "./utils/getElement.js";
const URL = "https://randomuser.me/api/";

const img = getElement(".user-img");
const btn = getElement(".btn");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);
// ruf

function getUser(URL) {
  btn.addEventListener("click", async () => {
    try {
      const data = await fetch(URL);
      const response = await data.json();
      // itterate object and get single user
      const singleUser = response.results[0];
      // console.log(singleUser);
      const { gender, email, phone, cell, nat } = singleUser;
      const { title, first, last } = singleUser.name;
      console.log(gender, email, phone, cell, nat, title, first, last);
      return {
        gender,
        email,
        phone,
        cell,
        nat,
        title,
        first,
        last,
      };
    } catch (error) {
      console.log(error);
    }
  });
}
getUser(URL);

// show user
function show() {}
console.log(show);
// show user end

window.addEventListener("DOMContentLoaded", show());

// new
