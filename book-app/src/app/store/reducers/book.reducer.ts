import { Action, createReducer, on } from '@ngrx/store';
import { addBook, updateBook, removeBook } from '../actions/book.actions';
import { IBook } from '../../models/book.model';

export const initialState: IBook[] = [];

const _bookReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => [...state, book]),
    on(updateBook, (state, { book }) =>
        state.map((b) => (b.id === book.id ? book : b)),
    ),
    on(removeBook, (state, { book }) => state.filter((b) => b.id !== book.id)),
);

export function bookReducer(state: IBook[] | undefined, action: Action<string>) {
    return _bookReducer(state, action);
}
