import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookFormComponent } from '../components/book-form/book-form.component';
import { BookItemComponent } from '../components/book-item/book-item.component';
import { BookListComponent } from '../components/book-list/book-list.component';

@NgModule({
    declarations: [BookFormComponent, BookItemComponent, BookListComponent],
    imports: [BrowserModule],
    providers: [],
    exports: [BookFormComponent, BookItemComponent, BookListComponent],
})
export class BookModule {}
