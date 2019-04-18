import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario:Object ={
    nombre: null,
    apelido: null,
    correo: null,
    pais: "CRI"
  }

  paises=[
    {
    codigo: "CRI",
    nombre: "costa Rica"
    },
    {
    codigo: "ESP",
    nombre: "España"
    }
]


  constructor() { }

 guardar( form:NgForm ){
console.log('submit');
console.log(form);
console.log(form.value);
 }

}
