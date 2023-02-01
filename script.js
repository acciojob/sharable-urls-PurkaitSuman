// your code here
document.querySelector("#button").addEventListener("click", function(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var year = document.querySelector("#year").value;
  document.querySelector("#url").innerHTML = "https://localhost:8080/?name=" + name + "&year=" + year;
});
