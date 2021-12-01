const output = document.getElementById('app');
const button = document.getElementById('postbutton');
const postsElm = document.getElementById('posts')
let worker;

document.addEventListener('DOMContentLoaded', init);

function init() {
  worker = new Worker('new-worker.js');
  worker.addEventListener('message', message);
  worker.addEventListener('error', error);

  worker.postMessage('First Message');

  button.addEventListener('click', () => {
      worker.postMessage('fetchdata')
  })
}

function message(e) {
  let data = e.data;
  if(typeof e.data === 'string'){
    output.textContent += data + '\n';
  }else{
    outputList(e.data)
  }
}

function error(error) {
  console.log(error.message);
}

function outputList(posts){
  let datalist;
  for(var post in posts ){
    datalist += `<li><h2>${posts[post].title}</h2><p>${posts[post].body}</p></li>`
  }
  postsElm.innerHTML = datalist;
}