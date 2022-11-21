import { Component, OnInit } from '@angular/core';

interface IUsuario {
  id?: number
  nome: string
  email: string
  cpf: string
  endereco: string
}

interface IConsulta {
  id?: number
  nome: string
  endereco: string
  especialidade: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  public url = 'http://localhost:8080';
  public usuarios: IUsuario[] = []
  public consultas: IConsulta[] = []
  public id!: number
  public nome!: string
  public email: string = 'lucasmarques@gmail.com'
  public cpf!: string
  public endereco!: string
  public especialiade!: string

  constructor() {
    this.nome = ''
  }


  async buscar(): Promise<void> {
    const resposta = await fetch(`${this.url}/usuarios`)
    this.usuarios = await resposta.json();
  }

  async buscarUser(email: string): Promise<void> {
    console.log(email)
    const resposta = await fetch(`${this.url}/usuarios?email=${email}`)
    const usuario = await resposta.json();


    for (var u of usuario) {
      this.id = u.id
      this.nome = u.nome
      this.email = u.email
      this.cpf = u.cpf
      this.endereco = u.endereço
    }

  }

  async buscarConsulta(nome: string): Promise<void> {
    console.log(nome)
    const resposta = await fetch(`${this.url}/consultas?nome=${nome}`)
    this.consultas = await resposta.json();

    // for (let cons of consulta) {
    //   this.nome = cons.nome
    //   this.endereco = cons.endereço
    //   this.especialiade = cons.especialiade
    // }
  }

  async deletarUser(id: number): Promise<void> {
    console.log(id)
    await fetch(`${this.url}/usuarios/${id}`, { method: 'DELETE' })

    this.nome = ''
    this.email = ''
    this.endereco = ''
    this.cpf = ''
  }

  ngOnInit() {
  }

}
