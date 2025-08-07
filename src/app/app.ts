import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Footer } from "./component/footer/footer";
import { Board } from './component/board/board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    Header, 
    Footer,
    Board
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularKanBan');
}
