import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item = "";

  onDescription = false;

  id : number;
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


  constructor(private mainS: MainService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.mainS.getIssues().subscribe((data) => {

      let temp = data.filter((ele) => ele.title === this.item);

      this.type = temp[0].issueType.toUpperCase();

      this.id = temp[0].id;

      this.title = temp[0].title;

      this.description = temp[0].description;

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

  showModal(): void {
    this.isVisible = true;
    this.router.navigate(['issues/' + this.type + '-' + this.id], { relativeTo: this.route });

  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.onDescription = false;
    this.router.navigate(['././project/kanban-board'], { relativeTo: this.route });
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


}
