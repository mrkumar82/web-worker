console.log('tests');

self.addEventListener('message', (e) => {
  console.log('web worker started', e.data);
  let data = e.data;

  switch (data) {
    case 'First Message':
      self.postMessage('Frist message from web worker');
      break;
    case 'Second Message':
      self.postMessage('Send second message');
      break;
    case 'Api':
      let url = 'https://jsonplaceholder.typicode.com/posts';
      // self.postMessage
      break;

    default:
      console.log('default message');
      self.postMessage('web worker closed');
      self.close();
  }
});
