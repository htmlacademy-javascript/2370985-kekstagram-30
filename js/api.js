import { showMessageGetData } from './submit-message.js';

const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'data-error',
  SEND_DATA: 'error',
  SUCCESS: 'success',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body },)
    .then((response) => {
      if (!response.ok) {
        showMessageGetData(errorText);
      }
      return response.json();
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
