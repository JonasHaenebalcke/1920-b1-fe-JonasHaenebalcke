import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, delay, catchError } from 'rxjs/operators';

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

  addNewQuote(quote: Quote) {
    return this.http
    .post(`${environment.apiUrl}/quotes/`, quote.toJSON())
    .pipe(catchError(this.handleError), map(Quote.fromJSON))
    .subscribe();
  }

  handleError(err: any): Observable<never>  {
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
