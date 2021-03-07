const chunk_size = '128';

function submit_bert(){
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", config.bert_key);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"in_txt":textbox.value,"author_name":author.value});
  console.log("DEBUG: ");
  console.log(raw);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(config.bert_end_point + "?chunk_size=" + chunk_size, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


function submit_stylometry(){
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", config.style_key);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"in_txt":textbox.value,"author_name":author.value});
  console.log("DEBUG: ");
  console.log(raw);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(config.style_end_point + "?chunk_size=" + chunk_size, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
