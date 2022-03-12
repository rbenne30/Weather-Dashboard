var url = "https://api.openweathermap.org/data/2.5/weather?q=city&appid=750fd3564acf9a5eea60e2988ce03a06&units=imperial"
 fetch(url).then(function(response){
console.log(response);
return response.json()
 })
 .then(function(){
console.log(data);
 })

//  var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
 var searchBtn = document.getElementById("startbtn")
 console.log(searchBtn)
 searchBtn.addEventListener("click", searchBtn);


var formSubmitHandler = function(event){
   event.preventDefault();
   console.log("hello");
}


searchBtn.addEventListener("click", formSubmitHandler);
    // //fetch().then(function(response) {
    //     response.json(). then(function(data) 
    //     console.log(response);
    //     return response.json();
    // })
    // .then(function(data) {
    //     //do something with the json data
    //     console.log(data);
    // });
   // var makeHTML = function(json)
//  document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);