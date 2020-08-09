import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.onDescription = false;
    // this.router.navigate(['././project/kanban-board'], { relativeTo: this.route });
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
