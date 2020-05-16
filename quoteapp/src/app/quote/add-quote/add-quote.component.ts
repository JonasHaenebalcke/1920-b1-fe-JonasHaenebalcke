import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote.model';
import { Auteur } from '../auteur.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, EMPTY} from 'rxjs';
import { QuoteDataService } from '../quote-data.service';
import { catchError} from 'rxjs/operators';

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
  public selectedValue: string;
  public auteur: Auteur;
  public maxDate =  new Date(new Date().setDate(new Date().getDate()-1))

  constructor(private fb: FormBuilder, private _quoteDataService: QuoteDataService) { }

  ngOnInit() {
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

  get auteurs$(): Observable<Auteur[]> {
    return this._fetchAuteurs$;

  }

  onSubmit() {
    console.log(this.quote.value.inhoud)
    this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
      .subscribe(auteur => this._quoteDataService
        .addNewQuote(new Quote(this.quote.value.inhoud, this.quote.value.date, null, auteur.id, null, null)));
  }

}
