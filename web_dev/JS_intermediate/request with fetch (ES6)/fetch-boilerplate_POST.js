/*
  Notice that the initial call takes two arguments: an endpoint and an object
  that contains information needed for the POST request. The rest of the request
  is identical to the GET request.
*/

fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then((response)=> {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message);
}).then((jsonResponse)=>{
  return jsonResponse
})
