function searchChange(event) {
  event.preventDefault();
  alert("searching");
}
let inputForm = document.querySelector("#search-form");
inputForm.addEventListener("submit", searchChange);
