import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CallParameter } from 'src/app/e_core/classes/call-parameter';
import { CallResult } from 'src/app/e_core/classes/call-result';
import { ApiService } from 'src/app/e_core/services/api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  limitlessResult: any;
  leaderCodeList: string[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    
    this.getTest().subscribe((result) => {
      console.info('wasd', result);
    });

    this.getTournamentDetails().subscribe((result) => {
      console.info('asd', result);
    });

    this.getTournamentStandings().subscribe((result) => {
      this.limitlessResult = result;

      for (let n = 0; n <= this.limitlessResult.body.length; n++) {

        this.leaderCodeList = this.limitlessResult.body.map(({ deck }) => deck.id);

      }

      this.countLeaderType(this.leaderCodeList);

    });

  }

  getTest(): Observable<CallResult> {
    return this.apiService.callLimitlessApi('', '/');
  }

  getTournamentStandings(): Observable<CallResult> {
    return this.apiService.callLimitlessApi('659170f8f6974305e4cb38f8', '/standings');
  }

  getTournamentDetails(): Observable<CallResult> {
    return this.apiService.callLimitlessApi('659170f8f6974305e4cb38f8', '/details');
  }

  countLeaderType(leaderCodeList: string[]) {

    let count = leaderCodeList.reduce(function (value, value2) {
      return (
        value[value2] ? ++value[value2] : (value[value2] = 1),
        value
      );
    }, {});

    console.info('yo', count);
    // return count;

  }

}


// https://play.limitlesstcg.com/api/657c853a9d9cfe6271ae0041details?key=280ef049ecf73601dd95a5a5c41c7798