import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item = "";

  onDescription = false;

  title = '';
  description = '';
  type = '';
  reporterName = '';
  priority = '';
  avatar = '';
  isVisible = false;
  selectedStatus = null;

  user = {
    author: "",
    avatar: ""
  };


  constructor(private mainS: MainService) { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.mainS.getIssues().subscribe((data) => {

      let temp = data.filter((ele) => ele.title === this.item);

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
