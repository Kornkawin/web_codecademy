/*
  Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load.
  Initially, AJAX was used only for XML formatted data, now it can be used to make requests that
  have many different formats.
*/

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint'

xhr.responseType = 'json';
xhr.onreadystatechange = ()=>{
  if (xhr.readyState === XMLHttpRequest.DONE){
    // Code to execute with response
    return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send()
