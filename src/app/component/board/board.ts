import { Component } from '@angular/core';
import { KanbanService } from '../../service/kanban.service';
import { Task } from '../../entity/task.model';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardTitle } from "@angular/material/card";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardTitle,
    Card
  ],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {  

  columns = [
    { title: 'BACKLOG', status: 'BACKLOG', stories: [] as Task[] },
    { title: 'BLOCKED', status: 'BLOCKED', stories: [] as Task[] },
    { title: 'IN PROGRESS', status: 'IN_PROGRESS', stories: [] as Task[] },
    { title: 'COMPLETED', status: 'COMPLETED', stories: [] as Task[] }, 
  ];

  constructor(private kanbanService: KanbanService) {
    const allStories = this.kanbanService.getColumns();
    this.columns.forEach(column =>{
      column.stories = allStories.filter(s=> s.status === column.status)
    })   
  }

  getHeaderClass(status: string): string {
  switch (status) {
    case 'BACKLOG':
      return 'header-backlog';
    case 'IN_PROGRESS':
      return 'header-in-progress';
    case 'COMPLETED':
      return 'header-completed';
    default:
      return 'header-default';
  }
}

}