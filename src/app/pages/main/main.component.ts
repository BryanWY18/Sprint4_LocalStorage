import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AddButtonComponent } from "./components/add-button/add-button.component";
import { ImgContainerComponent } from './components/img-container/img-container.component';
import { NewimageFormComponent } from './components/newimage-form/newimage-form.component';
import { ImgService } from '../../services/img.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  newImageModalID:number=1;

  imgArray:Image[]=[];

  constructor(private imgService:ImgService){}


  ngOnInit():void{
    this.imgArray=this.imgService.getImages();
  }

}
