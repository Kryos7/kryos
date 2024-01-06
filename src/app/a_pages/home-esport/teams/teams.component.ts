import { Component, OnInit } from '@angular/core';
import { CallResult } from 'src/app/e_core/classes/call-result';
import { CallParameter } from 'src/app/e_core/classes/call-parameter';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/e_core/services/api.service';
import { ELOService } from 'src/app/e_core/services/elo.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  currentEvent;
  currentLayout;
  TeamsResult;

  limitlessResult: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    public eloService: ELOService,
    private router: Router
  ) {

    // this.currentEvent = this.eloService.getCurrentEvent();
    // TODO spostare il parammap sul service? prima volta non riuscita
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentEvent = params.get('event');
        this.eloService.transmitCurrentEvent(this.currentEvent);
      }
    )

    // restituisce stringa 'heroes' o 'magic' etc.
    this.currentLayout = this.eloService.currentLayout;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // faccio partire la funzione ogni volta che un elemento riferito a uno stesso componente viene ricliccato
        this.getTeamsJson(this.currentEvent).subscribe((result) => {
          this.TeamsResult = result;
        });
      }
    });

  }

  ngOnInit() {  }

  getTeamsJson(currentEventPassed): Observable<CallResult> {
    switch (currentEventPassed) {
      case 'nexus-conflict':
        this.currentEvent = null;
        return this.apiService.callApiFake(this.currentLayout + '/teams/' + currentEventPassed + '-teams.json', new CallParameter('GET'), false);
      case 'elo-championship-' + this.currentLayout:
        this.currentEvent = null;
        return this.apiService.callApiFake(this.currentLayout + '/teams/' + currentEventPassed + '-teams.json', new CallParameter('GET'), false);
      case 'elo-for-fun':
        this.currentEvent = null;
        return this.apiService.callApiFake(this.currentLayout + '/teams/' + currentEventPassed + '-teams.json', new CallParameter('GET'), false);
    }

    return this.apiService.callApiFake('heroes/teams/nexus-conflict-teams.json', new CallParameter('GET'), false);

  }

}
