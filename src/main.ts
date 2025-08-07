import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { KanbanService } from './app/service/kanban.service';

bootstrapApplication(App, {
  providers: [
    KanbanService, 
  ]
})
  .catch((err) => console.error(err));
