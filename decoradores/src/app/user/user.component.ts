import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Usuario } from '../app.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  @Input('data') user: any | Usuario;

  @Output() borrar = new EventEmitter<number>()

  constructor() { }

  borrarUsuario(id: number){
    console.log("ID: ", id)
    this.borrar.emit(id)
  }

}
