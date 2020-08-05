import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isVisible = false;

  constructor(private modalS: ModalService) { }

  ngOnInit(): void {
    this.modalS.onChangeVisible.subscribe(data => this.isVisible = data);
  }



}
