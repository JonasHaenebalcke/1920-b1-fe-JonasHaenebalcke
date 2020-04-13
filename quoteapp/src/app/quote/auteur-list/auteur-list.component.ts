import { Component, OnInit } from '@angular/core';
import { Auteur } from '../auteur.model';
import { Observable, EMPTY } from 'rxjs';
import { QuoteDataService } from '../quote-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-auteur-list',
  templateUrl: './auteur-list.component.html',
  styleUrls: ['./auteur-list.component.css']
})
export class AuteurListComponent implements OnInit {
  private _fetchAuteurs$: Observable<Auteur[]>
  public errorMessage: string = '';

  constructor(private _quoteDataService: QuoteDataService) {
  }

  get auteurs$(): Observable<Auteur[]> {
    return this._fetchAuteurs$;
  }

  ngOnInit(): void {
    this._fetchAuteurs$ = this._quoteDataService.auteurs$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

}
