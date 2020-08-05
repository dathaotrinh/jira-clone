import { Component, OnInit } from '@angular/core';
import { transferArrayItem, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  backlog = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  selected = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  inprogress = [
    'Create kanban board',
    'Make kanban responsive',
    'Drag and Drop'
  ]

  done = [
    'Find a free admin template'
  ]

  constructor(private mainS:MainService) { }

  ngOnInit(): void {
    this.mainS.getIssues().subscribe(data => {
      let filer = data.filter(ele => ele.id === 2)
      console.log(filer);
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
