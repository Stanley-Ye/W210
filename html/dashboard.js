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
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"in_txt":textbox.value,"author_name":author.value});
  console.log("DEBUG: " + raw);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  var content = document.getElementById('response');
  var content2 = document.getElementById('response2');

  fetch("https://cjyiruowfd.execute-api.us-east-2.amazonaws.com/default/stylometry_beta?chunk_size=128", requestOptions)
    .then(response => content.innerHTML = response.text())
    .then(result => content2.innerHTML = JSON.stringify(result))
    .catch(error => console.log('error', error));
  
  
  console.log("AF-2");
  //displayResponse2("hello-2");
}
