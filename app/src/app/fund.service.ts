import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Fund } from './fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private fundsUrl = 'api/funds';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET funds from the server */
  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.fundsUrl)
      .pipe(
        catchError(this.handleError<Fund[]>('getFunds', []))
      );
  }

  /** GET fund by id. Will 404 if id not found */
  getFund(id: number): Observable<Fund> {
    const url = `${this.fundsUrl}/${id}`;
    return this.http.get<Fund>(url).pipe(
      catchError(this.handleError<Fund>(`getFund id=${id}`))
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
