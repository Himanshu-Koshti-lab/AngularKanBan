import { Component } from '@angular/core';
import { Column } from '../column/column';
import { KanbanService } from '../../service/kanban.service';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.html',
  styleUrl: './board.css'
})
export class Board {
  columns: Column[] = [];

  constructor(private kanbanService: KanbanService) {
    this.columns = this.kanbanService.getColumns();
    console.log(this.columns);
    
  }
}
