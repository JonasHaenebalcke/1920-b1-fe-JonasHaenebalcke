import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote.model';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 @Input() public quote: Quote;


  constructor() {
  }

  ngOnInit(): void {
  }
}
