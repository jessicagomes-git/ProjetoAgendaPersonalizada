import { Contatos } from './../shared/models/contatos.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  formContatos: FormGroup;


  contatos: Array<Contatos> = [{
    nome: "Ana", email: "ana@gmail.com", telefone: "(61)99145-2113"
  },{
    nome: "Carlos", email: "carlos@gmail.com", telefone: "(61)99190-2003"
  }]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.formContatos = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.email],
    })
  }

  onSubmit(){
    this.contatos.push(this.formContatos.value);
    this.formContatos.reset();
  }

  excluir(i: any){
    this.contatos.splice(i,1);
    //i sendo o indice que deseja excluir e 1 a quantidade a partir disso
  }


}
