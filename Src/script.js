function changeSubmit(event) {
  event.preventDefault();
  alert("searching");
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeSubmit);
