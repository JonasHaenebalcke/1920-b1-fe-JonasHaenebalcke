import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteDataService } from '../quote-data.service';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  public quote: Quote;

  constructor(private route: ActivatedRoute, private quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.quoteDataService.getQuote$(id).subscribe(item => this.quote = item);

    this.route.data.subscribe(item => 
      this.quote = item['quote']);
  }
}