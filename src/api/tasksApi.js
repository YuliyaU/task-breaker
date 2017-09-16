import 'whatwg-fetch';
var baseURL = "http://localhost:3000/api/";

export function getTasks() {
    return get('tasks');
}

function get(url) {
    return fetch(baseURL + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); 
}