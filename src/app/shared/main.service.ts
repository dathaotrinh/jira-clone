import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/shared/project.interface';
import { Issue } from 'src/app/shared/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  toggleChanged = new Subject<boolean>();

  projectUrl = "http://localhost:8080/api/projects/get";

  issueUrl = "http://localhost:8080/api/issues/get";

  constructor(private http: HttpClient) { }

  getProjectInfo(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl);
  }

}
