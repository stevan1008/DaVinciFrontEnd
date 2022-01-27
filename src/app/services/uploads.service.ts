import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  selectedData!: Data;

  private URL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${this.URL}/upload`)
  }

  getDato(id: string) {
    return this.http.get(`${this.URL}/upload/${id}`)
  }

  postDatos(data: Data) {
    return this.http.post(`${this.URL}/upload/`, data)
  }
  
}
