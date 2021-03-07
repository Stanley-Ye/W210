//import React, { Component } from 'react';
//console.log(process.env.REACT_APP_API_KEY_stylometry);

require('dotenv').config()
const key1 = process.env.KEY_bert;
const key2 = process.env.KEY_stylometry;
console.log(key1);
console.log(key2);



const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)



function submit_bert(){
  console.log("submit_bert");
}

function submit_stylometry(){
  console.log("submit_stylometry");
}
