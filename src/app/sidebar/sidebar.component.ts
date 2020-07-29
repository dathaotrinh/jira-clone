import { Component, OnInit, OnChanges } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened: boolean;
  constructor(private mainS: MainService) {
  }

  ngOnInit(): void {
    this.mainS.toggleChanged.subscribe(req => {
      this.opened = req

      console.log(this.opened);

    });
  }

}
