import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/Categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Categories[]>('/assets/mock-data.json');
  }
}
