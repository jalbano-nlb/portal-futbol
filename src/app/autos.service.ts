import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor() { }

  getColor(){
    return 'azul'
  }
}
