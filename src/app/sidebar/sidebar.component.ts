import { Component, OnInit, OnChanges } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name = "";
  category = "";

  constructor(private mainS: MainService) {
  }

  ngOnInit(): void {
    this.mainS.getProject().subscribe(res => {
      this.name = res.name;
      this.category = res.category;
    });
  }

  createIssue() {

  }

}
