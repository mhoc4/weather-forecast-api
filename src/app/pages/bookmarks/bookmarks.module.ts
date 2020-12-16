import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarks.reducer';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ],
  declarations: [BookmarksPage],
})
export class BookmarksModule { }
