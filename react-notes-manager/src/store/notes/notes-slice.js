import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import noteAPI from "../../api";
import axios from "axios";
const BASE_URL = "http://localhost:3200/notes";

const initialState = {
    notes: [],
    status: 'idle',
    error: null
}

const fetchAll = createAsyncThunk(
    'notes/fetchAll',
    async () => {
      const response = await axios.get(`${BASE_URL}`)
      console.log(response.data)
      return response.data
    }
)

const createNote = createAsyncThunk(
    'notes/create',
    async (formValues) => {
        const response = await axios.post(`${BASE_URL}`, formValues)
        return response.data
    }
)

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAll.pending]: (state, action) => {
        state.status = 'loading'
    },
    [fetchAll.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
    },
    [fetchAll.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    }
  }
});

export { fetchAll, createNote }
export const noteReducer = noteSlice.reducer;