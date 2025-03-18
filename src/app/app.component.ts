import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariablesComponent } from '../components/variables/variables.component';
import { HeaderComponent } from './components/header/header.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VariablesComponent, HeaderComponent, StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  username="Angular 19";
}
