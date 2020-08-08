import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  data: any[] = [];
  submitting = false;
  user = {
    author: "",
    avatar: ""
  };
  inputValue = '';

  constructor(private mainS: MainService) { }

  ngOnInit(): void {
    this.mainS.getUser(1).subscribe((user) => {

      this.user = {
        author: user.name,
        avatar: user.avatarUrl
      };
    });
  }




  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: new Date()
        }
      ].map(e => {
        return {
          ...e,
          displayTime: e.datetime
        };
      });
    }, 200);
  }

}
