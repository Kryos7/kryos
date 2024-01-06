import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

import { faAngleRight, faHistory, faInfoCircle, faTable, faUsers } from '@fortawesome/free-solid-svg-icons';

import { ELOService } from 'src/app/e_core/services/elo.service';

@Component({
  selector: 'app-menu-esport',
  templateUrl: './menu-esport.component.html',
  styleUrls: ['./menu-esport.component.scss']
})
export class MenuEsportComponent implements OnInit {

  faInfoCircle = faInfoCircle
  faTable = faTable;
  faUsers = faUsers;
  faHistory = faHistory;
  faAngleRight = faAngleRight;

  currentEvent: string = 'default';

  constructor(
    public eloService: ELOService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {



        this.currentEvent = this.eloService.currentEventBeautified;
      }
    });

  }

  ngOnInit() {

  }

}
