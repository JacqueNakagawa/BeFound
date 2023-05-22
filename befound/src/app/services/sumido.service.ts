import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SumidoService {

  SERVER_URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  public getSumido() {
    return this.http.get<Array<any>>(`${this.SERVER_URL}/sumido`)
  }
}
