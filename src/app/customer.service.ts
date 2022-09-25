import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL_SERVICES = 'http://localhost8080'

  private urlBase = this.URL_SERVICES + "/customer";
  private httpHeaders = new HttpHeaders({'Content-type':'aplication/json'});

    constructor(private http: HttpClient) { }

  getProductList(): Observable<any>{
    console.log("LLamando a REST:" + this.urlBase + '{id}');
    return this.http.get(this.urlBase+ '{id}').pipe(
      map(response => response as Customer[]),
      catchError(e => {
        alert(e.status+ ":" + e.error.message)
        return throwError(() => {
          const error: any = new Error(e.error.message);
          error.timestamp = Date.now();
          return error;
         });
     })
 );

}

  createCostumer(costumer: Object) : Observable<Object>{

    return this.http.post(this.urlBase+'/customers', costumer, {headers: this.httpHeaders});
  }

}
