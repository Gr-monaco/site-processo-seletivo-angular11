import { Injectable } from '@angular/core';


//Não adicionei um array com UserProfile pois não era necessário para o que foi proposto.

export interface UserProfile {
  name: string
  email: string
  telefone: string
  endereco: string
  idade: number
  preferencia: string
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  nome: string = '';
  email:string = '';
  telefone: string = '';
  endereco: string = '';
  idade: number = 0
  preferencia: string ='C#'

  constructor() { }

  updateData(userProfile: UserProfile){
    this.nome = userProfile.name;
    this.email = userProfile.email;
    this.telefone = userProfile.telefone;
    this.endereco = userProfile.endereco;
    this.idade = userProfile.idade;
    this.preferencia = userProfile.preferencia;
  }
}
