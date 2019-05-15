import axios from 'axios';

const BASE_URL = 'http://localhost:8000/'
const AUTH_URL = BASE_URL + 'rest-auth/'

export default async function login(username, password) {
  try {
    const response = await axios.post(AUTH_URL + "login/", {
        username: username,
        password: password,
      });
    axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.key;
    console.log('Login Sucessful! Key: ' + response.data.key);
    getNotes();
    //logout();
  } catch (error) {
    console.error('err: ' + error);
  }
}

async function getNotes(){
  const notes = await axios.get(BASE_URL + 'api/');
  console.log(notes.data);
}

async function logout(){
  try {
    const response = await axios.post(AUTH_URL + "logout/", {});
    console.log(response);
  } catch (error) {
    console.error('err: ' + error);
  }
}
