// var url =
//   "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial";
//  fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// var searchButton = $(".searchButton");
// var apiKey = "750fd3564acf9a5eea60e2988ce03a06";

// for (var i = 0; i <localStorage.length; i++) {
//     var city = localStorage.getItem("City");
//     var cityName = $(".list-group"). addclass("list-group-item");

//     cityName.append("<li>"+ city + "</li>");
// }


const api_url = "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial";

//defining async function
async function getapi(city) {

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=750fd3564acf9a5eea60e2988ce03a06`

    //storing response
    const response = await fetch(url);
    //storing data in form of JSON
    var data = await response.json();
    var { lat, lon } = data[0];

    let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=750fd3564acf9a5eea60e2988ce03a06`

     const response2  =  await fetch(url2);
     var data = await response2.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }

    
}
//calling that async function
// getapi('miami');

//Function to hide that loader
//  function hideloader(){
    //  document.getElementById('').style.display = 'none';   
// }

//response.json().then(function (data) {
//   displayRepos(data, user);
// });
//  var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
var SearchCity = document.getElementById("card");
console.log(SearchCity);
// document.querySelector('button').addEventListener("click", SearchCity);

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log("hello");
};

document.querySelector('button').addEventListener("click", handleClick);

function handleClick() {
    let city = document.querySelector('input').value;

    city ? getapi(city) : '';
}
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



