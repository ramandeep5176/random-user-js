// import modules

import get from "./utils/getElement.js";
import getUser from "./utils/fetchuser.js";
import displayUser from "./utils/dispayUser.js";
const URL = "https://randomuser.me/api/";

const btn = get(".btn");

const showUser = async () => {
  //
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
