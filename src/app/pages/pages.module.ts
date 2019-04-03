import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [MainComponent, ListComponent, BookReviewComponent, ThanksComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
