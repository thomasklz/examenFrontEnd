import { Component } from '@angular/core';
import { CineService } from '../servicios/cine.service';


@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [ ],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {

  constructor(private cineService:CineService){}


  store(nombreCine:any,  lugar:any){
    this.cineService.storeCine(nombreCine.value, lugar.value).subscribe({
      next: (data:any)=>{
        debugger
      },
      error: (error:any)=>{
        debugger
      },


    })

  }


}
