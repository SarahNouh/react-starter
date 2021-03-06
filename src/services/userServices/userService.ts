/**
 * @Author: sarah
 * @Date:   2019-07-31T17:03:37+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-08-01T13:08:51+02:00
 */
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

class UserService {
  async getAllUsers() {
    const url = `${API_URL}/users`;
    return axios.get(url).then(response => response.data);
  }

  async getUser(id: number) {
    const url = `${API_URL}/users/${id}`;
    return axios.get(url).then(response => response.data);
  }
}

export default UserService;
