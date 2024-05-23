import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from '../interfaces/Estados';
@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private url: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  constructor(private http: HttpClient) {

  }

  listar(): Observable<Estados[]>{
    return this.http.get<Estados[]>(this.url) as Observable<Estados[]>;
  }
}
