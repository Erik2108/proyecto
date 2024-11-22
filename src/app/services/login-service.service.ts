import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SimpleResult } from '../Model/SimpleResult';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private dataSubject = new BehaviorSubject<string>('default value');
  currentData = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  productos(): Observable<SimpleResult[]> {
    
    return this.http.get<SimpleResult[]>('http://localhost:3000/productos').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error.Message == 'Invalid password'){
      return throwError(error.error.Message);
    }
    else{
      return throwError('error service');
    }
    
  }
}
