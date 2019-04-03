import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path: 'books',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },{
        path: 'review',
        component: BookReviewComponent
      },{
        path: 'notifications',
        component: ThanksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
