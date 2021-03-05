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
  
  var raw = JSON.stringify({"in_txt":textbox.value,"author_name":author.value});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var content = document.getElementById('response');
  var content2 = document.getElementById('response2');

  fetch("https://naocgyef4k.execute-api.us-east-2.amazonaws.com/default/stylometry_beta?chunk_size=128", requestOptions)
    .then(response => console.log(response))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  
  console.log("END");
}
