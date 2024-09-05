import { createSelector } from '@ngrx/store';
import { IBook } from '../../models/book.model';

export const selectBooks = (state: { books: IBook[] }) => state.books;

export const selectAllBooks = createSelector(
    selectBooks,
    (books: IBook[]) => books,
);
