
// Adds both values
var Add = function (value1 , value2) {
  var answer = (value1 + value2);
  console.log("The answer is "+ answer)
  Write(answer);
};


var Write = function(e){
  var answer = document.querySelector('#answer');
  answer.innerHTML = e;
};


// Grab form values on button press and call Add() function
var button = document.querySelector('#calculate-button');
button.addEventListener('click', function (event) {
  event.preventDefault();
 var Lform = document.getElementById("valueone").value;
 var Rform = document.getElementById("valuetwo").value;
 Add(Number(Lform) , Number(Rform));
});




// Test = function(e){
// console.log("SUCCESS")
// };
