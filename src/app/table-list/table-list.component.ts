import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  @Output() emitterTableState = new EventEmitter<boolean>();

  constructor(public userProfileService : UserProfileService) { }

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

  functionToCloseTableList(){
    this.emitterTableState.emit(false);
  }

  ngOnInit(): void {
  }

}