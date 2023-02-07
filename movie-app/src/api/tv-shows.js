// import axios from "axios";
// import { API_KEY_PARAM, BASE_URL } from '../config';

import {
  FAKE_POPULARS,
  FAKE_RECOMMENDATIONS
} from "./fake_data";

export class TVShowAPI {

  static async fetchPopulars() {
    // const response = await axios(
    //   `${BASE_URL}tv/popular${API_KEY_PARAM}`
    // );
    // return response.data.results[0];
    return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    // const response = await axios(
    //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    // );
    // return response.data.results;
    return FAKE_RECOMMENDATIONS;
  }
}