import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 classNames = 'p-4 text-3xl'
}

