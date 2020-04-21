import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote.model';
import { Opmerking } from '../opmerking.model';
import { Auteur } from '../auteur.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, EMPTY, timer } from 'rxjs';
import { QuoteDataService } from '../quote-data.service';
import { catchError, delay, timeout } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

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
      auteur: ['']
    });

  }

  get auteurs$(): Observable<Auteur[]> {
    return this._fetchAuteurs$;

  }

  onSubmit() {
    // console.log(this.quote.value.inhoud + this.quote.value.datum)
    // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
    // .subscribe(auteur => console.log(auteur.voornaam));








    this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
      .subscribe(auteur => this._quoteDataService
        .addNewQuote(new Quote(this.quote.value.inhoud, this.quote.value.datum, null, auteur.id, null, null, null)));
















  }
  // this._quoteDataService.addNewQuote(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, new Auteur("dat", "boi", "riding a bike", null, null, null), null))

  // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
  //   .subscribe(auteur => this._quoteDataService.addNewQuote(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, new Auteur("dat", "boi", "riding a bike", null, null, null), null)));

  // timeout(2000);

  //  console.log(this.auteur);
  // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
  // .subscribe(auteur => this.newQuote.emit(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, auteur)));


  // this._fetchAuteurs$.subscribe(a => console.log(a.filter(a => a.achternaam == this.quote.value.achternaam).find(isNullOrUndefined)));

  // this._fetchAuteurs$.subscribe(a => this.auteur = a.find(a => a.achternaam == this.quote.value.achternaam));
  // console.log(this.auteur);

  //  console.log(this.auteur);

  // setTimeout(function () {
  //   if (this.auteur == undefined) {
  //     console.log(this.auteur);
  //   }
  // }, 1000);

  // this._quoteDataService
  // .addNewQuote(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, this.auteur, null))
  // .;



  //  this.newQuote.emit(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, new Auteur('voornaam', 'achternaam', new Date(), 'omschrijving', 1, null, null, null)));
  //  this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
  //   .subscribe(auteur => console.log(auteur));


  // this.auteur = this._fetchAuteurs$.subscribe(a => a.filter(a =>
  //   a.achternaam = this.quote.value.achternaam
  // ).map(a => a));





  // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`).subscribe(a => this.auteur = a);
  // console.log(this.auteur.achternaam);
  // this._fetchAuteurs$.subscribe(a => console.log(a.filter(a => a.achternaam == this.quote.value.achternaam).find(isNullOrUndefined)));
  // console.log(this.auteur.achternaam);
  // this.newQuote.emit(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, this.auteur, null));



  // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`).subscribe(a => this.auteur = a);


  // this.auteur = this._fetchAuteurs$.subscribe(a => a.filter(a => a.))

  // await this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)
  //   .then(a => a.subscribe(a => this.auteur = a));
  //   console.log(this.auteur);

  // this._quoteDataService
  // .addNewQuote(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, this.auteur, null))
  // .


  // (a => this.newQuote.emit(new Quote(this.quote.value.inhoud, 0, this.quote.value.datum, null, a, null))));
  // await (await this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)).toPromise()



  // this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)).subscribe(a => this.auteur = a);
  // this.initializeAuteur(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`)




  // private initializeAuteur(naam: String) {
  //   this._quoteDataService.getauteur$(`${this.quote.value.auteur.voornaam} ${this.quote.value.auteur.achternaam}`).subscribe(a => this.auteur = a);

  // }



  // addQuote(quoteInhoud: HTMLInputElement): boolean{

  //   const quote = new Quote(quoteInhoud.value, 0, new Date(), null, new Auteur('voornaam', 'achternaam', new Date(), 'omschrijving', 1, null, null, null));
  //   this.newQuote.emit(quote);
  //   return false;
  // }

}
