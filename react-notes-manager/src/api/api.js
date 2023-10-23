
import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async create(formValues) {
    return ''
  }
  static async fetchAll() {
    return ''
  }
  static async deleteById(noteId) {
    return ''
  }
  static async updateById(id, values) {
    return ''
  }
  static async fetchById(noteId) {
    return ''
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString()
    }
  }
}
