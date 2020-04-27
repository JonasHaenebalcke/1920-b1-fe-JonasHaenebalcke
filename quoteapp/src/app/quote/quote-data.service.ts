import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { Auteur } from './auteur.model';
import { Opmerking } from './opmerking.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteDataService {


  constructor(private http: HttpClient) { }

  get quotes$(): Observable<Quote[]> {
    return this.http.get(`${environment.apiUrl}/quotes/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(
        (list: any[]): Quote[] => list.map(Quote.fromJSON)
      )
    );
  }

  getQuote(id: string): Observable<Quote> {
    return this.http
      .get(`${environment.apiUrl}/quotes/${id}`)
      .pipe(catchError(this.handleError), map(Quote.fromJSON)); // returns just one recipe, as json
  }


  getauteur$(naam: string): Observable<Auteur> {
    return this.http.get(`${environment.apiUrl}/auteurs/${naam}`)
      .pipe(tap(console.log),
        catchError(this.handleError),
        map(
          (Auteur.fromJSON)
        )
      );
  }

  get auteurs$(): Observable<Auteur[]> {
    console.log("auteurs");
    return this.http.get(`${environment.apiUrl}/auteurs/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(
        (list: any[]): Auteur[] => list.map(Auteur.fromJSON)
      )
    );
  }


  // get auteurByName(): Observable<Auteur> {
  //    console.log("auteurs");
  //   return this.http.get(`${environment.apiUrl}/auteurs/`).pipe(
  //     tap(console.log),
  //     catchError(this.handleError),
  //     map(
  //       (auteur : Auteur) =>
  //     )
  //   );
  // }

  addNewQuote(quote: Quote) {
    console.log(quote);
    console.log(quote.auteurId);
    return this.http
      .post(`${environment.apiUrl}/quotes/`, quote.toJSON())
      .pipe(catchError(this.handleError), map(Quote.fromJSON))
      .subscribe(a => window.location.reload());
  }

  addNewAuteur(auteur: Auteur) {
    return this.http
      .post(`${environment.apiUrl}/auteurs/`, auteur.toJSON())
      .pipe(catchError(this.handleError), map(Auteur.fromJSON))
      .subscribe(a => window.location.reload());
  }

  addNewOpmerking(id: number, opmerking: Opmerking) {
    return this.http.post(`${environment.apiUrl}/quotes/${id}`, opmerking.toJSON())
      .pipe(catchError(this.handleError), map(Opmerking.fromJSON))
      .subscribe(a => window.location.reload());
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }




}
