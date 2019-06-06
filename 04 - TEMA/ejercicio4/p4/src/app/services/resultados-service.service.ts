import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resultado } from '../entities/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadosServiceService {
  url:string = 'http://cursosdedesarrollo.com/pactometro/resultados.json'; 
  constructor(private http:HttpClient) { 

  }
  getData() {     
    return this.http.get<Observable<Resultado[]>>(this.url)
        .pipe(catchError(this.handleError('get', [])));   
  
  }

  private handleError (operation = 'operation', result?) {     
    return (error: any): any[] => { 
    // TODO: send the error to remote logging infrastructure       
    console.error(error); // log to console instead 
    // TODO: better job of transforming error for user consumption       
    console.log(`${operation} failed: ${error.message}`); 
    // Let the app keep running by returning an empty result.       
    return [];     
  }
  }


}
