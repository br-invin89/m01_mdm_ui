import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories() {
    return this.httpClient.get<any[]>(this.baseUrl+'/categories');
  }

  postNewCategory(formData) {
    return this.httpClient.post<any>(this.baseUrl+'/category', formData)
  }

  getAllValues() {
    return this.httpClient.get<any[]>(this.baseUrl+'/values');
  }

  postNewValue(formData) {
    return this.httpClient.post<any>(this.baseUrl+'/value', formData)
  }
}
