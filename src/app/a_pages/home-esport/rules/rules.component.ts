import { Component, OnChanges, OnInit } from '@angular/core';
import { CallResult } from 'src/app/e_core/classes/call-result';
import { CallParameter } from 'src/app/e_core/classes/call-parameter';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/e_core/services/api.service';
import { ELOService } from 'src/app/e_core/services/elo.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  RulesResult;
  currentEvent;

  constructor(
    private ApiService: ApiService,
    public eloService: ELOService,
    private activatedRoute: ActivatedRoute,
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
        this.getRulesJson(this.currentEvent).subscribe((result) => {
          this.RulesResult = result;
        });
      }
    });

  }

  ngOnInit() { }

  currentLayout;

  getRulesJson(currentEventPassed): Observable<CallResult> {

    switch (currentEventPassed) {
      case 'nexus-conflict':
        this.currentEvent = null;
        return this.ApiService.callApiFake(this.currentLayout + '/rules-nexus.json', new CallParameter('GET'), false);
      case 'elo-championship-' + this.currentLayout:
        this.currentEvent = null;
        return this.ApiService.callApiFake(this.currentLayout + '/rules-champ.json', new CallParameter('GET'), false);
      case 'elo-for-fun':
        this.currentEvent = null;
        return this.ApiService.callApiFake(this.currentLayout + '/rules-fun.json', new CallParameter('GET'), false);
    }

    return this.ApiService.callApiFake('heroes/rules.json', new CallParameter('GET'), false);

  }

}
