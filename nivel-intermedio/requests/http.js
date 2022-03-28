
//Función "setTimeOut"
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

//XHR request "Método GET"

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}
xhr.open('GET', url);
xhr.send();

//XHR request "Método POST"
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType= 'json';

xhr.onreadystatechange = () => {
   if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}
xhr.open('POST', url);
xhr.send(data);