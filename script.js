const output = document.getElementById('app');
let worker;

document.addEventListener('DOMContentLoaded', init);

function init() {
  worker = new Worker('new-worker.js');
  worker.addEventListener('message', message);
  worker.addEventListener('error', error);

  worker.postMessage('First Message');

  output.addEventListener('click', () => {
    worker.postMessage('Second Message');
  });
}

function message(e) {
  let data = e.data;
  output.textContent += data + '\n';
  console.log(data);
}

function error(error) {
  console.log(error.message, error.filename);
}
