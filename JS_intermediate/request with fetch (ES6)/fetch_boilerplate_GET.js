/*
  The second .then()‘s success callback won’t run until the previous .then() method
  has finished running. It will also not run if there was an error was thrown previously.
*/

fetch('https://api-to-call.com/endpoint').then(response=>{
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError=>{
  console.log(networkError.message);
}).then(jsonResponse=>{
  return jsonResponse;
});
