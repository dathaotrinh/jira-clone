import { Component, OnInit, OnChanges } from '@angular/core';
import { MainService } from '../shared/main.service';
import { UserClass } from '../shared/user.modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, switchMap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.interface';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  name = '';
  priority = '';
  category = '';
  isVisible = false;
  users: UserClass[] = [];
  i = 0;

  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  isLoading = false;
  randomUserUrl = 'https://api.randomuser.me/?results=5';

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  editorStyle = {
    height: '300px',
  };

  config = {
    toolbar: [['bold', 'italic', 'underline', 'strike']],
  };

  constructor(private mainS: MainService, private http: HttpClient) {}

  ngOnInit(): void {
    this.mainS.getProject().subscribe((res) => {
      this.name = res.name;
      this.category = res.category;
      let usersid = res.users.split(',');
      console.log(usersid)
      usersid.forEach((userid) => {
        this.mainS.getUser(parseInt(userid)).subscribe((ele) => {
          this.users[this.i] = new UserClass(
            ele.id,
            ele.name,
            ele.email,
            ele.avatarUrl,
            ele.createdAt,
            ele.updatedAt,
            ele.projectid
          );
          this.i++;
        });
      });
    });

    const getRandomNameList = (name: string) =>
      this.mainS.getUsers().pipe(
        map((list: User[]) => {
          return list.map((item: User) => `${item.name}`);
        })
      );

    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getRandomNameList));
    optionList$.subscribe((data) => {
      this.optionList = data;
      this.isLoading = false;
    });
  }

  createIssue() {}


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  onSave() {}
}
