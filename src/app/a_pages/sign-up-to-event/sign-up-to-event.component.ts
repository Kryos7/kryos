import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { EventTypeExample } from 'src/app/e_core/classes/event-type-example';
import { RankHeroesList } from 'src/app/e_core/classes/rank-heroes';
import { RoleHeroesList } from 'src/app/e_core/classes/role-heroes';

@Component({
  selector: 'app-sign-up-to-event',
  templateUrl: './sign-up-to-event.component.html',
  styleUrls: ['./sign-up-to-event.component.scss']
})
export class SignUpToEventComponent implements OnInit {

  formSignUp: FormGroup;

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
    private formBuilder: FormBuilder
  ) {

    this.formSignUp = this.formBuilder.group({

      EventSelected: new FormControl('', Validators.required),
      InscriptionType:  new FormControl('', Validators.required),

      TeamName: new FormControl('', Validators.required),
      TeamSize: new FormControl('5', Validators.required),

      LeaderName: new FormControl('', Validators.required),
      LeaderRank: new FormControl('', Validators.required),

      Player2Name: new FormControl('', Validators.required),
      Player2Rank: new FormControl('', Validators.required),

      Player3Name: new FormControl('', Validators.required),
      Player3Rank: new FormControl('', Validators.required),

      Player4Name: new FormControl('', Validators.required),
      Player4Rank: new FormControl('', Validators.required),

      Player5Name: new FormControl('', Validators.required),
      Player5Rank: new FormControl('', Validators.required),

      Message: new FormControl(''),

      AgentName: new FormControl('', Validators.required),
      AgentRank: new FormControl('', Validators.required),
      AgentRole1: new FormControl('', Validators.required),
      AgentRole2: new FormControl(''),

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
