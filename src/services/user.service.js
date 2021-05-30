import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:5000/';

class UserService {
  getUserInfo(userId) {
    return axios.get(API_URL + 'user/'+userId, { headers: authHeader() });
  }
}

export default new UserService();