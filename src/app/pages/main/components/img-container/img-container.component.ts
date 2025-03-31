import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Image } from '../../../../models/image.model';
import { ImgService } from '../../../../services/img.service';
import { ViewModalComponent } from "../view-modal/view-modal.component";
declare var $:any

@Component({
  selector: 'app-img-container',
  standalone:true,
  imports: [ViewModalComponent],
  templateUrl: './img-container.component.html',
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent {

  @Input() images!:Image[]
  @Output() reloadImgs= new EventEmitter<void>;

  constructor(private imgService:ImgService){}

  deleteImage(id:number){
    this.imgService.deleteImageByID(id);
    this.reloadImgs.emit();
  }

  show:boolean=false;

  imageSelected:Image={
    id_image:0,
    name:"",
    src:""
  }

  active:string="active";

  onShow(i:Image){
    this.show=true;
    this.imageSelected=i;

    $(`#${this.active}`).modal('hide');
  }

}