import "../css/style.scss";
import { httpClient } from "./helpers";

/**
 * VARS
 */

const searchField = document.getElementById("searchbar");
const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();
  if (searchField.value.length > 3) {
    httpClient(`/search/photos?&query=${searchField.value}`).then(
      (response) => {
        console.log(response.data);
      }
    );
  }
};

// httpClient("/search/photos?&query=ocean").then((response) => {
//   console.log(response.data);
// });
