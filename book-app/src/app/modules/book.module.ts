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
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [BookFormComponent, BookItemComponent, BookListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        StoreModule.forFeature('books', bookReducer),
        EffectsModule.forFeature([BookEffects]),
    ],
    providers: [],
    exports: [BookFormComponent, BookItemComponent, BookListComponent],
})
export class BookModule {}
