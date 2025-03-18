import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
isChecked:boolean=false
num = [23,45,67,89]
onClick()
{
  this.isChecked= !this.isChecked;
}
}
