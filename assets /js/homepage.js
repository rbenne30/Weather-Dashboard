var url =
  "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

var displayRepos = function (repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
};
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial";

//defining async function
async function getapi(url) {
    //storing response
    const response = await fetch(url);
    //storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
    
}
//calling that async function
getapi(api_url);

//Function to hide that loader
function hideloader(){
    document.getElementById('loading').style.display = 'none';   
}

//response.json().then(function (data) {
//   displayRepos(data, user);
// });
//  var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
var searchBtn = document.getElementById("startbtn");
console.log(searchBtn);
searchBtn.addEventListener("click", searchBtn);

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log("hello");
};

searchBtn.addEventListener("click", formSubmitHandler);
// //fetch().then(function(response) {
//     response.json(). then(function(data)
//     console.log(response);
//     return response.json();
// })
// .then(function(data) {
//     //do something with the json data
//     console.log(data);
// });
// var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);



