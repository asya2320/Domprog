import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../models/book.model';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
    @Input() book: IBook = { author: '', name: '', year: 0, pages: 0 };
    @Input() isNew: boolean = false;

    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<IBook>();

    ngOnInit(): void {
        if (this.isNew) {
            this.book.id = Math.random().toString(36).substr(2, 9);
        }
    }

    onSubmit(): void {
        this.save.emit(this.book);
    }
}
