import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    constructor() {}

    getBooks(): IBook[] {
        return JSON.parse(localStorage.getItem('books') || '[]');
    }

    saveBooks(books: IBook[]): void {
        localStorage.setItem('books', JSON.stringify(books));
    }
}
