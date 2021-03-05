function submit(){
  var textbox = document.getElementById("textbox");
  var response = document.getElementById("response");
  response.value = "HI:" + textbox.value;
}

function displayResponse(text){
  var response = document.getElementById("response");
  response.value = text;
}

function displayResponse2(text){
  var response2 = document.getElementById("response2");
  response2.value = text;
}

function submit2(){
var myHeaders = new Headers();
myHeaders.append("x-api-key", "G0W5V6A6WB9JcVms3IKxN5TVSYCVZX7z7IX5KgnT");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", '*');
myHeaders.append("Origin", "https://stanley-ye.github.io");
myHeaders.append("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, DELETE');
myHeaders.append("Access-Control-Allow-Headers", 'Content-Type,Authorization');
myHeaders.append("Access-Control-Allow-Credentials", 'true');


var raw = JSON.stringify({"in_txt":"It was the best of times","author_name":"Jane Austen"});
  
  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

	console.log("BF");
  
var content = document.getElementById('response');

  
  fetch("https://naocgyef4k.execute-api.us-east-2.amazonaws.com/default/stylometry_beta?chunk_size=128", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => content.innerHTML = error.message);
  
  
  console.log("AF");
  displayResponse2("hello");
}
