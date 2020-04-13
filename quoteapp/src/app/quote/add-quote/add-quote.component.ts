import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote.model';
import { Opmerking } from '../opmerking.model';
import { Auteur } from '../auteur.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { QuoteDataService } from '../quote-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
@Output() public newQuote = new EventEmitter<Quote>();

  public quote: FormGroup;
  private _fetchAuteurs$: Observable<Auteur[]>;
  public errorMessage: string = '';

  constructor(private fb: FormBuilder, private _quoteDataService: QuoteDataService) { }

  ngOnInit(){
    this._fetchAuteurs$ = this._quoteDataService.auteurs$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    this.quote = this.fb.group({
      inhoud: ['', Validators.required],
      datum: [new Date().toDateString, Validators.required],
      auteur: ['', Validators.required]      
    });
    
  }

  get auteurs$(): Observable<Auteur[]>{
    return this._fetchAuteurs$;
    
   }

  onSubmit() {
       this.newQuote.emit(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, new Auteur('voornaam', 'achternaam', new Date(), 'omschrijving', 1, null, null, null)));
  }

  // addQuote(quoteInhoud: HTMLInputElement): boolean{
    
  //   const quote = new Quote(quoteInhoud.value, 0, new Date(), null, new Auteur('voornaam', 'achternaam', new Date(), 'omschrijving', 1, null, null, null));
  //   this.newQuote.emit(quote);
  //   return false;
  // }

}
