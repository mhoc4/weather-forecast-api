import { createAction, props } from '@ngrx/store';

export const removeBookmark = createAction (
    '[Bookmarl] Remove Bookmark',
    props<{ id: number }>(), 
);