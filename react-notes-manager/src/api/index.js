import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async create(formValues) {
    const response = await axios.post(BASE_URL, formValues);
    return response.data;
  }
  static async fetchAll() {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
  static async fetchById(noteId) {
    const response = await axios.get(`${BASE_URL}/${noteId}`);
    return response.data;
  }
  static async deleteById(noteId) {
    const response = await axios.delete(`${BASE_URL}/${noteId}`);
    return response.data;
  }
  static async updateById(id, values) {
    const response = await axios.put(`${BASE_URL}/${id}`, values);
    return response.data;
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString()
    }
  }
}
