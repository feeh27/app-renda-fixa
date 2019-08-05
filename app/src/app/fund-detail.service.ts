import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FundDetail } from './fund-detail';


@Injectable({
  providedIn: 'root'
})
export class FundDetailService {
  private fundDetailUrl = 'api/details';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET funds detail from the server */
  getFundsDetail(): Observable<FundDetail[]> {
    return this.http.get<FundDetail[]>(this.fundDetailUrl)
      .pipe(
        catchError(this.handleError<FundDetail[]>('getFundsDetail', []))
      );
  }

  /** GET fund detail by id. Will 404 if id not found */
  getFundDetail(id: number): Observable<FundDetail> {
    const url = `${this.fundDetailUrl}/${id}`;
    return this.http.get<FundDetail>(url).pipe(
      catchError(this.handleError<FundDetail>(`getFundDetail id=${id}`))
    );
  }

  /** GET fund detail by cnpj. Will 404 if id not found */
  searchFundsDetail(cnpj: string): Observable<FundDetail[]> {
    if (!cnpj.trim()) {
      // if not search term, return empty FundDetail array.
      return of([]);
    }
    return this.http.get<FundDetail[]>(`${this.fundDetailUrl}/?cnpj=${cnpj}`).pipe(
      catchError(this.handleError<FundDetail[]>(`getFund cnpj=${cnpj}`, []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
