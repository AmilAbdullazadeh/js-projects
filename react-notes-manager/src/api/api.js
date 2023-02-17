
import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async create(formValues) {
    return (await axios.post(`${BASE_URL}`, formValues)).data;
  }

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data;
  }

  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(id, values) {
    return (await axios.patch(`${BASE_URL}/${id}`, values)).data;
  }

  static async fetchById(noteId) {
    return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  }
}
