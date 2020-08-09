import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/shared/project.interface';
import { Issue } from 'src/app/shared/issue.interface';
import { User } from 'src/app/shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  toggleChanged = new Subject<boolean>();

  pid = 1;

  projectUrl = "http://localhost:8080/api/projects/get/" + this.pid;

  projectsUrl = "http://localhost:8080/api/projects/get";

  issuesUrl = "http://localhost:8080/api/issues/get";

  userUrl = "http://localhost:8080/api/users/get/";

  createIssueUrl = "http://localhost:8080/api/issues/create";

  constructor(private http: HttpClient) { }

  getProjectInfo(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject(): Observable<Project> {
    return this.http.get<Project>(this.projectUrl);
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + id);
  }

  createIssue(issue: Issue) {
    return this.http.post<Issue>(this.createIssueUrl, issue);
  }
}
