import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  opened: boolean;

  constructor(private mainS: MainService) { }

  ngOnInit(): void {
  }

  onToggle() {
    this.opened = !this.opened;
    this.mainS.toggleChanged.next(this.opened);

  }

}
