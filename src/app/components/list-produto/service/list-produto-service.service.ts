import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from 'src/model/produto';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://api-desafio-front.justdigital.com.br/';


@Injectable({
  providedIn: 'root'
})
export class ListProdutoServiceService {

  constructor(private http: HttpClient) { }

  public getProdutos (): Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  


}
