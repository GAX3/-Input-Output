import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'decoradores';

  usuarios: Usuario [] | any = [];
  
  constructor ( private _htttp: HttpClient) {}

  ngOnInit (){
    this._htttp.get('http://jsonplaceholder.typicode.com/users') 
    .pipe(
      delay(2500)
    )
    .subscribe((datos: any | []) => this.usuarios = datos )
    
  }

  borrarUsuario(id: number){
    let userID = id;

    console.log("USER ID: ", userID);
    
    this.usuarios = this.usuarios.filter((usuario: { id: number; name: string }) => usuario.id != id)
    console.log(this.usuarios);
  }


}

export interface Usuario {
  id: number
  name: string
  email: string
}


