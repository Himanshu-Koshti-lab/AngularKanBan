import { Component, Input } from '@angular/core';
import { Task } from '../../entity/task.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {


getReadableTime(arg0: string) {
  return new Date(arg0).toLocaleDateString()
}


@Input() story!: Task;
}
