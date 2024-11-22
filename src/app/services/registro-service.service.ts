import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SimpleResultRegistro } from '../Model/SimpleResultRegistro';
import { CreateRegistroRequest } from './createRegistroRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  private baseUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  registroProducto(datosproducto: CreateRegistroRequest): Observable<SimpleResultRegistro> {
    return this.http.post<SimpleResultRegistro>('http://localhost:3000/productos', datosproducto)
      .pipe(
        catchError(this.handleError)
      );
  }

  eliminarProducto(id_producto: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_producto}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error.Message === 'datos invalidos') {
      return throwError(error.error.Message);
    } else {
      return throwError('Error en el servicio');
    }
  }
}
