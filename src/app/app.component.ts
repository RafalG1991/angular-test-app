import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {ParentComponent} from "./parent/parent.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ParentComponent, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestApp';
  users: {id: number, name: string}[] = [{id: 1, name: 'Tomek'}, {id: 2, name: 'Andrzej'}, {id: 3, name: 'Marzena'}, {id: 4, name: 'Wiesław'}];
  shouldBeVisible=true;
  trackUsersFn(index: number, user: {id: number, name: string}) {
    return user.id;
  }
  isLoggedIn: boolean|null = null;
}
