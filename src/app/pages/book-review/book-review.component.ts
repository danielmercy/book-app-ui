import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let header = document.querySelector('header');
    let label = header.getElementsByClassName('container')[0].getElementsByTagName('label')[0];
    label.innerHTML = 'Add Book Review'

    let btn = header.getElementsByClassName('container')[0]
              .getElementsByTagName('div')[0]
              .getElementsByClassName('btn')[0]
    btn.classList.add('visible');
    
    
  }

}
