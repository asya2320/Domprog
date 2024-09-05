import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addBook, updateBook, removeBook } from '../actions/book.actions';
import { tap } from 'rxjs/operators';
import { BookService } from '../../services/book.service';

@Injectable()
export class BookEffects {
    constructor(
        private actions$: Actions,
        private bookService: BookService,
    ) {}

    saveBooks$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addBook, updateBook, removeBook),
                tap(() => {
                    const books = this.bookService.getBooks();
                    this.bookService.saveBooks(books);
                }),
            ),
        { dispatch: false },
    );
}
