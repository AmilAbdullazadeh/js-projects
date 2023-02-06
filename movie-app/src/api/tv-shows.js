// import axios from "axios";
// import { API_KEY_PARAM, BASE_URL } from '../config';

import { FAKE_POPULARS } from "./fake_data";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios(
    //   `${BASE_URL}tv/popular${API_KEY_PARAM}`
    // );
    // return response.data.results[0];
    return FAKE_POPULARS
  }
}