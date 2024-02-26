import { Component } from '@angular/core';
import { CineService } from '../servicios/cine.service';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
 cines:any
  constructor(private cineService:CineService ) {
    
  }

  store(idCine:any, numH:any, numA:any, pelicula:any){

    this.cineService.createHabitaciones(numH.value,numA.value, idCine.value, pelicula.value).subscribe({
      next: (data:any)=>{
        debugger
       // this.cines= data.cine
      },
      error: (error:any)=>{
        debugger
      },
    })

    
  }


  ngOnInit(){
    this.getCine();

  }

  getCine(){
    this.cineService.getCine().subscribe({
      next: (data:any)=>{
        this.cines= data.cine
      },
      error: (error:any)=>{
        debugger
      },
    })
  }


 

}
