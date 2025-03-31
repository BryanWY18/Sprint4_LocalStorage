import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from '../../../../models/image.model';
import { ImgService } from '../../../../services/img.service';

@Component({
  selector: 'app-view-modal',
  standalone:true,
  imports: [],
  templateUrl: './view-modal.component.html',
  styleUrl: './view-modal.component.css'
})
export class ViewModalComponent implements OnChanges {

  @Input() images!: string;

  @Input() id_check!:string;

  constructor(private imgService:ImgService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.images)
  }

}
