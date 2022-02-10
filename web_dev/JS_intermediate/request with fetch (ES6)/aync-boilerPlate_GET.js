const getData = async () => {
  try {
    // 1. used fetch() to make GET and POST requests.
    const response = await fetch('https://api-to-call.com/endpoint');
    // 2. check the status of the responses coming back
    if (response.ok){
      const jsonResponse = await response.json();
      // 4. taking successful responses and rendering it on the webpage
      return jsonResponse;
    }
    // 3. catch errors that might possibly arise
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}
