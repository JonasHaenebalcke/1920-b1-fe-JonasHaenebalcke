import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteDataService } from '../quote-data.service';
import { Quote } from '../quote.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  public quote: Quote;
  loggedInUser$ = this._authenticationService.user$;

  constructor(private _authenticationService: AuthenticationService, private route: ActivatedRoute, private quoteDataService: QuoteDataService) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.quoteDataService.getQuote$(id).subscribe(item => this.quote = item);

    this.route.data.subscribe(item => 
      this.quote = item['quote']);

    
  }

 
}

