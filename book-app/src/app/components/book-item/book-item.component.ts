import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../models/book.model';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
    @Input() book!: IBook;
    @Output() edit = new EventEmitter<IBook>();
    @Output() remove = new EventEmitter<IBook>();
}
