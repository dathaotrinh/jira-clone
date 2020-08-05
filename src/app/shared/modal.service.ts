import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  onChangeVisible = new Subject<boolean>();

  constructor() { }

  showModal(item: string): void {
    this.onChangeVisible.next(true);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.onChangeVisible.next(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.onChangeVisible.next(false);
  }
}
