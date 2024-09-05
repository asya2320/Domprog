import { createAction, props } from '@ngrx/store';
import { IBook } from '../../models/book.model';

export const addBook = createAction('[Book] Add Book', props<{ book: IBook }>());
export const updateBook = createAction(
    '[Book] Update Book',
    props<{ book: IBook }>(),
);
export const removeBook = createAction(
    '[Book] Remove Book',
    props<{ book: IBook }>(),
);
