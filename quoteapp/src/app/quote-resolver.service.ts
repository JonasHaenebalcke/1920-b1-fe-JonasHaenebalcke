import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Quote } from './quote/quote.model';
import { QuoteDataService } from './quote/quote-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteResolverService implements Resolve<Quote> { 
  constructor(private quoteDataService: QuoteDataService) {}
 
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<Quote> {
    return this.quoteDataService.getQuote(route.params['id']);
  }
}
