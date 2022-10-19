const qs = window.location.search;

//parse query string into variables
console.log(qs);

//var url = 'https://www.loc.gov/search/?q=baseball&fo=json';

function getSearchResults(term, format = 'search') {
  var url = `https://www.loc.gov/${format}/?q=${term}&fo=json`;

  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error(res.statusText);

    return res.json();
  })
}

//use parsed qs variables
getSearchResults('basketball', 'photos').then(function (results) {
    console.log(results)
})