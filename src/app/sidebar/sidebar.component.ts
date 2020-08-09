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
  isVisible = false;

  editorStyle = {
    height: '300px'
  }

  config =
  {
    toolbar:[ ['bold', 'italic', 'underline', 'strike']]
  }

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

}
