import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movie: moviesReducer,
  },
});

export { store };
export { addMovie, addSong, removeMovie, removeSong };
