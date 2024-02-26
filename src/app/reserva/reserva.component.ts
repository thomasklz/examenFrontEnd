import { Component } from '@angular/core';
import { CineService } from '../servicios/cine.service';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
cines:any;
habitaciones:any
asientosDisponibles:any;
  constructor(private cineService:CineService ) {}

  
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

  getHabitacionesCine(cineId:any){

    this.cineService.getHabitacionForCine(cineId.value).subscribe({
      next: (data:any)=>{
        this.habitaciones= data.habitaciones
      },
      error: (error:any)=>{
        debugger
      },
    })
  }

  reserva(idHabitacion:any, asientosReserva:any){

    this.cineService.reserva(asientosReserva.value, idHabitacion.value).subscribe({
      next: (data:any)=>{
        debugger
        //this.habitaciones= data.habitaciones
      },
      error: (error:any)=>{
        debugger
      },
    })
  }


  getAsientos(habitacionID:any){

    this.cineService.getAsientoDisponiblesForHabitacion(habitacionID.value).subscribe({
      next: (data:any)=>{
 
        this.asientosDisponibles= data.asientos[0].numAsientos
        debugger
      },
      error: (error:any)=>{
        debugger
      },
    })
  }

  store(){}
}
