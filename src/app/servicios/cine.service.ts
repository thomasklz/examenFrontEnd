import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private http:HttpClient) { }

  storeCine(cine:string, l:string){
    return this.http.post('http://localhost:3000/api/cine',{
      nombreCine : cine,
      lugar:l
    });
  }


  getCine(){
    return this.http.get('http://localhost:3000/api/cine');
  }



  createHabitaciones(numHabitacion:string,numAsientos:number,cineId:number, nombrePelicula:string  ){
    return this.http.post('http://localhost:3000/api/habitaciones',{
      numHabitacion:numHabitacion,
      numAsientos:numAsientos,
      cine_id:cineId,
      nombrePelicula:nombrePelicula
    });
  }
  

  reserva(numAsientos:number,idHabitacion:number ){
    return this.http.post('http://localhost:3000/api/habitaciones/reserva',{
      numAsientos:numAsientos,
      idHabitacion:idHabitacion,

    });
  }



  getHabitacionForCine(id:number){
    return this.http.get('http://localhost:3000/api/habitaciones/'+id);
  }
  getAsientoDisponiblesForHabitacion(id:number){
    return this.http.get('http://localhost:3000/api/habitaciones/disponibles/'+id);
  }
}
