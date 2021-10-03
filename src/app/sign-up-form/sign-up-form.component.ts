import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserProfile, UserProfileService } from '../user-profile.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  options = ['C#','C++','C',
             'Python','PHP','HTML',
             'Javascript','Ruby','R',
             'Lisp','Java']

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  telephoneFormControl = new FormControl('',[
    Validators.pattern(/(\(?\d{2}\)?\s)?\d{4,5}\-\d{4}/),
    Validators.maxLength(15)
  ])

  matcher = new MyErrorStateMatcher();

  userProfile : UserProfile = {
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    idade: 0,
    preferencia: ''
  }

  @Output() emitterFormOpen = new EventEmitter<boolean>();
  @Output() emitterTableOpen = new EventEmitter<boolean>();
  @Output() emitterFormClose = new EventEmitter<boolean>();

  private form_open : boolean = false;
  private table_open : boolean = true;

  constructor(private userProfileService: UserProfileService) { }

  functionToCallFormOpen() {
    this.emitterFormOpen.emit(this.form_open);
  }

  functionToCallTableOpen(){
    this.emitterTableOpen.emit(this.table_open);

  }

  functionToCallFormClose(){
    this.emitterFormClose.emit(false);
  }

  cancelCadastro() {
    this.userProfile.name = ''; // Talvez colocar em outra função para resetar dados?
    this.userProfile.email = '';
    this.userProfile.telefone ='';
    this.userProfile.endereco ='';
    this.userProfile.idade = 0;
    this.userProfile.preferencia = '';
    this.functionToCallFormClose()
  }

  updateProfile(event: Event){
    this.userProfileService.updateData(this.userProfile)
  }
  
  getButtonState(): boolean{
    if (this.userProfile.idade >=18  && !this.emailFormControl.hasError('email') && !this.telephoneFormControl.hasError('pattern') && !this.telephoneFormControl.hasError('length')){
      return false;
    }
    else{
      return true;
    }
  }

  ngOnInit(): void {
  }

}
