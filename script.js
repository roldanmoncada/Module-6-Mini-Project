var searchInputEl = document.getElementById("search-input")
var submitButtonEl = document.getElementById("submit-button")

submitButtonEl.addEventListener("click", function() {
    fetch("https://www.loc.gov/searchresults=.htmlfo=json").then(function(data) {
    return data.json();
}) .then(function(data) {
    console.log(data);
})
})








// fetch("https://www.loc.gov/collections/civil-war-maps?fo=json").then(function(data) {
//    return data.json();
//}) .then(function(data) {
//    console.log(data);
//})