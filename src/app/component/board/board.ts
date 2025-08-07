import { Component } from '@angular/core';
import { Column } from '../column/column';
import { KanbanService } from '../../service/kanban.service';
import { Task } from '../../entity/task.model';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [ Card, CommonModule ],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {
  stories: Task[] = [];

  constructor(private kanbanService: KanbanService) {
    this.stories = this.kanbanService.getColumns();
    console.log(this.stories);    
  }
}