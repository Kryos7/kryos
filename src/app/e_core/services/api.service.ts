import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CallParameter } from '../classes/call-parameter';
import { CallResult } from '../classes/call-result';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  a: any;

  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Accept',
      'Content-Disposition': 'attachment'
    })
  };

  constructor(
    private HttpClient: HttpClient
  ) { }


  callLimitlessApi(tournamentId: string, params: string): Observable<any> {

    return this.HttpClient.get<any>(`${environment.api.limitless.address}` + tournamentId + params,
      {
        params: {
          key: environment.api.limitless.key,
        },
        observe: 'response',
      }
    );

  }

  private callServiceFake(method: string, controller: string, data: object): Observable<CallResult> {
    method = method.toUpperCase();
    switch (method) {
      case 'GET':
        return this.HttpClient.get<CallResult>(`${environment.api.fakeJson}` + controller, this.HttpOptions).pipe(
          // tap(_ => this.AppGeneralService.loadingPanel.Hide()),
          catchError(this.handleError));
      case 'POST':
        return this.HttpClient.post<CallResult>(`${environment.api.fakeJson}` + controller, data, this.HttpOptions).pipe(
          // tap(_ => this.AppGeneralService.loadingPanel.Hide()),
          catchError(this.handleError));
      case 'PUT':
        return this.HttpClient.put<CallResult>(`${environment.api.fakeJson}` + controller, data, this.HttpOptions).pipe(
          // tap(_ => this.AppGeneralService.loadingPanel.Hide()),
          catchError(this.handleError));
      case 'DELETE':
        return this.HttpClient.delete<CallResult>(`${environment.api.fakeJson}` + controller, this.HttpOptions).pipe(
          // tap(_ => this.AppGeneralService.loadingPanel.Hide()),
          catchError(this.handleError));
    }
    return this.a;
  }

  callApiFake(controller: string, param: CallParameter, check_session?: boolean, spinner: boolean = true): Observable<CallResult> {
    // if (spinner) {
    //   this.AppGeneralService.loadingPanel.Show();
    // }
    return this.callServiceFake(param.method, controller, param);
  }

  private handleError(error: any) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);

  }

}
