var url =
  "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial";
 fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
var searchButton = $(".searchButton");
var apiKey = "750fd3564acf9a5eea60e2988ce03a06";

for (var i = 0; i <localStorage.length; i++) {
    var city = localStorage.getItem("City");
    var cityName = $(".list-group"). addclass("list-group-item");

    cityName.append("<li>"+ city + "</li>");
}
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

    
}
//calling that async function
getapi(api_url);

//Function to hide that loader
function hideloader(){
    document.getElementById('').style.display = 'none';   
}

//response.json().then(function (data) {
//   displayRepos(data, user);
// });
//  var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
var SearchCity = document.getElementById("card");
console.log(SearchCity);
Button.addEventListener("click", SearchCity);

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



