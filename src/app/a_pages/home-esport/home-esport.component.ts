import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ELOService } from 'src/app/e_core/services/elo.service';

@Component({
  selector: 'app-home-esport',
  templateUrl: './home-esport.component.html',
  styleUrls: ['./home-esport.component.scss']
})
export class HomeEsportComponent implements OnInit {

  esportLayout: any;

  // heroesLayout: boolean = false;
  // magicLayout: boolean = false;
  // lolLayout: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public eloService: ELOService
  ) {

    this.activatedRoute.url.subscribe(params => {
      this.esportLayout = params[0].path;
    })

    this.eloService.getEsportLayout(this.esportLayout);

  }

  ngOnInit() {
  }

}