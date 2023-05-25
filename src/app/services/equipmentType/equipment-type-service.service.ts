import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentTypeServiceService {
  REST_API: string = 'http://localhost:3000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  getTypes(){
    return this.httpClient.get(`${this.REST_API}/type`)
  }
  getTypeById(id: string){
    return this.httpClient.get(`${this.REST_API}/type/${id}`)
  }
}
