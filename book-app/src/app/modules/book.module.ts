import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookFormComponent } from '../components/book-form/book-form.component';
import { BookItemComponent } from '../components/book-item/book-item.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from '../store/reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from '../store/effects/book.effects';

@NgModule({
    declarations: [BookFormComponent, BookItemComponent, BookListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forFeature('books', bookReducer),
        EffectsModule.forFeature([BookEffects]),
    ],
    providers: [],
    exports: [BookFormComponent, BookItemComponent, BookListComponent],
})
export class BookModule {}
