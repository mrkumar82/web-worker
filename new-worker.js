self.addEventListener('message', (e) => {
  let data = e.data;

  switch (data) {
    case 'First Message':
      self.postMessage('Frist message from web worker');
      break;
    case 'fetchdata':
      let fetchdata = fetch('https://jsonplaceholder.typicode.com/posts');
        fetchdata.then(resp =>  resp.json())
        .then(data => {
           self.postMessage(data)
        })
        .catch(error => {
          self.postMessage(error)
        })
      break;

    default:
      console.log('default message');
      self.postMessage('web worker closed');
      self.close();
  }
});
