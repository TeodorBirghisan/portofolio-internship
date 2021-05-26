import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:5000/';

class UserService {
  getUserInfo() {
    return axios.get(API_URL + 'user/1', { headers: authHeader() });
  }
}

export default new UserService();