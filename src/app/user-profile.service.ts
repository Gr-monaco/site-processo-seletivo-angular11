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

  userProfiles: UserProfile[] = [{
    name: '', email: '', telefone:'', endereco:'', idade:0,preferencia:''}] // Tive que adicionar array pois tabelas de angular usam array

  constructor() { }

  updateData(userProfile: UserProfile){
    /**this.nome = userProfile.name;
    this.email = userProfile.email;
    this.telefone = userProfile.telefone;
    this.endereco = userProfile.endereco;
    this.idade = userProfile.idade;
    this.preferencia = userProfile.preferencia; **/
    this.userProfiles[0].name = userProfile.name;
    this.userProfiles[0].email = userProfile.email;
    this.userProfiles[0].endereco = userProfile.endereco;
    this.userProfiles[0].telefone = userProfile.telefone;
    this.userProfiles[0].idade = userProfile.idade;
    this.userProfiles[0].preferencia = userProfile.preferencia;

  }

  getClassOfUserPref(userProfileService: {preferencia : string}){    // O codigo funciona, entretanto, utilizaria um swith, devo pesquisar como utilizar switch em typescript
    return {
      'pref-csharp': userProfileService.preferencia == 'C#',
      'pref-cplusplus': userProfileService.preferencia == 'C++',
      'pref-c': userProfileService.preferencia == 'C',
      'pref-python': userProfileService.preferencia == 'Python',
      'pref-php': userProfileService.preferencia == 'PHP',
      'pref-html': userProfileService.preferencia == 'HTML',
      'pref-javascript': userProfileService.preferencia == 'Javascript',
      'pref-ruby': userProfileService.preferencia == 'Ruby',
      'pref-r': userProfileService.preferencia == 'R',
      'pref-lisp': userProfileService.preferencia == 'Lisp',
      'pref-java': userProfileService.preferencia == 'Java'
    }
  }
}
