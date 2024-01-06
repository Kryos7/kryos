import { Component, OnInit } from '@angular/core';
import { CallResult } from 'src/app/e_core/classes/call-result';
import { CallParameter } from 'src/app/e_core/classes/call-parameter';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/e_core/services/api.service';
import { ELOService } from 'src/app/e_core/services/elo.service';

@Component({
  selector: 'app-blog-esport',
  templateUrl: './blog-esport.component.html',
  styleUrls: ['./blog-esport.component.scss']
})
export class BlogEsportComponent implements OnInit {

  BlogResult: any;

  constructor(
    private ApiService: ApiService,
    public eloService: ELOService
  ) { }

  ngOnInit() {

    this.getBlogJson().subscribe((result) => {
      this.BlogResult = result;
    });

  }

  getBlogJson(): Observable<CallResult> {
    if (this.eloService.heroesLayout) {
      return this.ApiService.callApiFake('heroes/blog.json', new CallParameter('GET'), false);
    }
    if (this.eloService.magicLayout) {
      return this.ApiService.callApiFake('magic/blog.json', new CallParameter('GET'), false);
    }
    if (this.eloService.lolLayout) {
      return this.ApiService.callApiFake('lol/blog.json', new CallParameter('GET'), false);
    }
    return this.ApiService.callApiFake('heroes/blog.json', new CallParameter('GET'), false);
  }

}
