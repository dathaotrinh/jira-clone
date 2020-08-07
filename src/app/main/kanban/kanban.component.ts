import { Component, OnInit } from '@angular/core';
import {
  transferArrayItem,
  moveItemInArray,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent implements OnInit {
  onDescription = false;
  isVisible = false;
  selectedStatus = null;

  backlog = [];
  selected = [];
  inprogress = [];
  done = [];

  title = '';
  description = '';
  type = '';
  reporterName = '';
  priority = '';
  avatar = "";

  user = {
    author: "",
    avatar: ""
  };

  editorStyle = {
    height: '100px'
  };

  constructor(private mainS: MainService) {}

  ngOnInit(): void {
    this.mainS.getIssues().subscribe((data) => {
      let selected = data.filter((ele) => ele.issueStatus === 'selected');
      selected.forEach((ele) => this.selected.push(ele.title));
      let backlog = data.filter((ele) => ele.issueStatus === 'backlog');
      backlog.forEach((ele) => this.backlog.push(ele.title));
      let inprogress = data.filter((ele) => ele.issueStatus === 'inprogress');
      inprogress.forEach((ele) => this.inprogress.push(ele.title));
      let done = data.filter((ele) => ele.issueStatus === 'done');
      done.forEach((ele) => this.done.push(ele.title));


    });
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showModal(i: number, array: string[]): void {
    this.mainS.getIssues().subscribe((data) => {

      let temp = data.filter((ele) => ele.title === array[i]);

      this.type = temp[0].issueType.toUpperCase() + '-' + temp[0].id;

      this.title = temp[0].title;

      this.description = temp[0].description;

      this.isVisible = true;

      this.selectedStatus = temp[0].issueStatus;

      this.priority =
        temp[0].issuePriority.charAt(0).toUpperCase() +
        temp[0].issuePriority.substring(1, temp[0].issuePriority.length);

      this.mainS.getUser(temp[0].reporterid).subscribe((user) => {
        this.reporterName = user.name;
        this.avatar = user.avatarUrl;

        this.user = {
          author: this.reporterName,
          avatar: this.avatar
        };
      });
    });
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.onDescription = false;
  }

  priorityColor(priorityType: string): string {
    if (priorityType === 'Medium') return 'orange';
    else if (priorityType === 'Highest') return 'red';
    else if (priorityType === 'High') return '#F06666';
    else if (priorityType === 'Low') return 'green';
    else if (priorityType === 'Lowest') return 'lightgreen';
  }

  onDescriptionChanged() {
    this.onDescription = !this.onDescription;
  }

  data: any[] = [];
  submitting = false;

  inputValue = '';


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
