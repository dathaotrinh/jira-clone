import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  toggleChanged = new Subject<boolean>();

  url = "http://localhost:8080/api/projects/get";
  constructor(private http: HttpClient) { }

  getProjectInfo(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }
}

export interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
