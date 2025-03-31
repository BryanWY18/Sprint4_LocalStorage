import { Component, Input } from '@angular/core';
import { NewimageFormComponent } from "../newimage-form/newimage-form.component";

@Component({
  selector: 'app-add-button',
  standalone:true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

  @Input() modalID!:number;

}
