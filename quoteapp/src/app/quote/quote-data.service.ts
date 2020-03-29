import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteDataService {
  
  constructor(private http: HttpClient) { }

  get quotes$(): Observable<Quote[]> {
    return this.http.get(`${environment.apiUrl}/quotes/`).pipe(
      tap(console.log),
      map(
        (list: any[]): Quote[] => list.map(Quote.fromJSON)
      )
    );
  }
  
  addNewQuote(quote: Quote){
  }
}
