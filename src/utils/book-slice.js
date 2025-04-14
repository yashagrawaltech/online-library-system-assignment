import { createSlice, nanoid } from "@reduxjs/toolkit";
import { books } from "./book-data";

const initialState = {
    books,
};

function getRandomNumber() {
    // Generate a random number between 2.5 and 5
    const randomNum = Math.random() * (5 - 2.5) + 2.5;
    // Round to one decimal place
    return Math.round(randomNum * 10) / 10;
}

const addBookToStore = (state, action) => {
    const newBook = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        cover: "https://www.omnibookslibrary.com/app/admin/images/books/1654677967.jpg",
        author: action.payload.author,
        rating: getRandomNumber(),
        category: action.payload.category,
    };
    state.books.push(newBook);
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: addBookToStore,
    },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
