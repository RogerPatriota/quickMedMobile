import { Component, OnInit } from '@angular/core';

interface IHospital {
  id?: number
  nome: string
  email: string
  endereco: string
  especialidade: string
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public url = 'http://localhost:8080';
  public hospitais: IHospital[] = []
  public nome!: string
  public email!: string
  public endereco!: string
  public especialidade!: string
  
  constructor() { 
    this.buscar()
   }

  async buscar(): Promise<void> {
    const resposta = await fetch(`${this.url}/hospitais`)
    this.hospitais = await resposta.json()

  }

  ngOnInit() {
  }

}
