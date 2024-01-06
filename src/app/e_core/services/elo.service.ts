import { Injectable } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ELOService {

  heroesLayout: boolean = false;
  magicLayout: boolean = false;
  lolLayout: boolean = false;

  currentEvent;
  currentEvent2;
  currentEventBeautified;
  currentLayout;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 
        this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentEvent2 = params.get('event');
        console.info('dal service', this.currentEvent2)
      }
    )
   }

  // Al click sull'immagine nella homepage viene passato un valore
  // Da quel valore vengono impostate variabili passate a tutto il progetto
  public getEsportLayout(esportLayout: string) {
    this.heroesLayout = false;
    this.magicLayout = false;
    this.lolLayout = false;

    switch (esportLayout) {
      case 'heroes':
        this.currentLayout = 'heroes';
        this.heroesLayout = true;
        break;
      case 'magic':
        this.currentLayout = 'magic';
        this.magicLayout = true;
        break;
      case 'lol':
        this.currentLayout = 'lol';
        this.lolLayout = true;
        break;
    }
  }

  public transmitCurrentEvent(receivedCurrentEvent) {
    this.currentEvent = receivedCurrentEvent;

    switch (this.currentEvent) {
      case 'nexus-conflict':
        this.currentEventBeautified = 'NEXUS CONFLICT';
        break;
      case 'elo-championship-heroes':
        this.currentEventBeautified = 'ELO CHAMPIONSHIP';
        break;
      case 'elo-championship-magic':
        this.currentEventBeautified = 'ELO CHAMPIONSHIP';
        break;
      case 'elo-championship-lol':
        this.currentEventBeautified = 'ELO CHAMPIONSHIP';
        break;
      case 'elo-for-fun':
        this.currentEventBeautified = 'ELO FOR FUN';
        break;
      case '':
        this.currentEventBeautified = '';
        break;
    }

  }

  // public getCurrentEvent() {
  //   this.activatedRoute.snapshot;

  //   this.activatedRoute.paramMap.subscribe(
  //     (params: ParamMap) => {
  //       this.currentEvent = params.get('event');
  //     }
  //   )
  // }
}
