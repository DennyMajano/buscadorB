import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {STATIC} from '../services/global';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http:HttpClient) { }

  getInfoLibro(id:string): Observable<any>{
    return this.http.get(STATIC.url + "libro/" + id);
  }
  getInfoArchivo(id:string): Observable<any>{
    return this.http.get(STATIC.url + "archivo/" + id);
  }
  getInfoMultimedia(id:string): Observable<any>{
    return this.http.get(STATIC.url + "multimedia/" + id);
  }
  getInfoTexto(id:string): Observable<any>{
    return this.http.get(STATIC.url + "texto/" + id);
  }
}
