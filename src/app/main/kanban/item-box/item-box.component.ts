import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {

  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }



}
