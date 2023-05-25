import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {
  REST_API: string = 'http://localhost:3000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  getEquipment() {
    return this.httpClient.get(`${this.REST_API}/equipment`)
  }
  getEquipmentById(id: String) {
    return this.httpClient.get(`${this.REST_API}/equipment/${id}`)
  }
  create(value: any) {
    return this.httpClient.post(
      `${this.REST_API}/equipment`,
      { ...value },
      { headers: this.httpHeaders })
  }
  update(id: String, value: any) {
    return this.httpClient.post(
      `${this.REST_API}/equipment/${id}`, {...value},
      { headers: this.httpHeaders })
  }
  delete(id: String) {
    return this.httpClient.delete(`${this.REST_API}/equipment/${id}`)
  }

}
