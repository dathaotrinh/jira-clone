import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  opened: boolean;

  constructor(private mainS: MainService) { }

  ngOnInit(): void {
  }


  onToggle() {
    this.opened = !this.opened;
    this.mainS.toggleChanged.next(this.opened);
    this.mainS.getProjectInfo().subscribe(res => {
      console.log("here");
      console.log(res[0])
    });
  }
}
