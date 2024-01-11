import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

import { EventTypeExample } from 'src/app/e_core/classes/event-type-example';
import { RankHeroesList } from 'src/app/e_core/classes/rank-heroes';
import { RoleHeroesList } from 'src/app/e_core/classes/role-heroes';

@Component({
  selector: 'app-sign-up-to-event',
  templateUrl: './sign-up-to-event.component.html',
  styleUrls: ['./sign-up-to-event.component.scss']
})
export class SignUpToEventComponent implements OnInit {

  formSignUp: UntypedFormGroup;

  inscriptionTypes: Array<string> = ['Squadra', 'Free agent'];
  inscriptionTeam: boolean = false;
  inscriptionAgent: boolean = false;

  selectableEvents: any = new EventTypeExample();
  eventDescription;
  eventName;

  teamSizes: Array<string> = ['5', '6', '7', '8', '9', '10'];
  teamSizeSelected;

  rankHeroesList: any = new RankHeroesList();
  roleHeroesList: any = new RoleHeroesList();

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(
    private formBuilder: UntypedFormBuilder
  ) {

    this.formSignUp = this.formBuilder.group({

      EventSelected: new UntypedFormControl('', Validators.required),
      InscriptionType:  new UntypedFormControl('', Validators.required),

      TeamName: new UntypedFormControl('', Validators.required),
      TeamSize: new UntypedFormControl('5', Validators.required),

      LeaderName: new UntypedFormControl('', Validators.required),
      LeaderRank: new UntypedFormControl('', Validators.required),

      Player2Name: new UntypedFormControl('', Validators.required),
      Player2Rank: new UntypedFormControl('', Validators.required),

      Player3Name: new UntypedFormControl('', Validators.required),
      Player3Rank: new UntypedFormControl('', Validators.required),

      Player4Name: new UntypedFormControl('', Validators.required),
      Player4Rank: new UntypedFormControl('', Validators.required),

      Player5Name: new UntypedFormControl('', Validators.required),
      Player5Rank: new UntypedFormControl('', Validators.required),

      Message: new UntypedFormControl(''),

      AgentName: new UntypedFormControl('', Validators.required),
      AgentRank: new UntypedFormControl('', Validators.required),
      AgentRole1: new UntypedFormControl('', Validators.required),
      AgentRole2: new UntypedFormControl(''),

    });

  }

  ngOnInit() {
  }

  get signUpToEventFormControls() { return this.formSignUp.controls }

  setEventDescription(evt) {
    this.eventDescription = evt.Descr;
    this.eventName = evt.Name;
  }

  setTeamSize(size){
    this.teamSizeSelected = size;
  }

  setInscriptionType(evt) {
    if(evt == 'Squadra'){
      this.inscriptionTeam = true;
      this.inscriptionAgent = false;
    }
    if(evt == 'Free agent'){
      this.inscriptionTeam = false;
      this.inscriptionAgent = true;
    }

  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
    console.log(this.fieldArray);
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  submit(){
    console.info('submittato')
  }

}
