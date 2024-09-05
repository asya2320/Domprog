import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../../models/book.model';
import {
    updateBook,
    addBook,
    removeBook,
} from '../../store/actions/book.actions';
import { selectAllBooks } from '../../store/selectors/book.selectors';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
    books$: Observable<IBook[]>;
    isModalOpen = false;
    selectedBook: IBook | null = null;

    constructor(private store: Store<{ books: IBook[] }>) {
        this.books$ = this.store.select(selectAllBooks);
    }

    ngOnInit(): void {
        this.loadBooksFromLocalStorage();
    }

    openModal(book: IBook | null = null): void {
        this.selectedBook = book;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
        this.selectedBook = null;
    }

    saveBook(book: IBook): void {
        if (this.selectedBook) {
            this.store.dispatch(updateBook({ book }));
        } else {
            this.store.dispatch(addBook({ book }));
        }
        this.closeModal();
        this.saveBooksToLocalStorage();
    }

    removeBook(book: IBook): void {
        this.store.dispatch(removeBook({ book }));
        this.saveBooksToLocalStorage();
    }

    private loadBooksFromLocalStorage(): void {
        const books = JSON.parse(localStorage.getItem('books') || '[]');
        books.forEach((book: IBook) => this.store.dispatch(addBook({ book })));
    }

    private saveBooksToLocalStorage(): void {
        const books = this.store.select(selectAllBooks).subscribe((books) => {
            localStorage.setItem('books', JSON.stringify(books));
        });
    }
}
