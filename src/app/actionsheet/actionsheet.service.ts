import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

export class Actionsheet {
    project: Object = {
        title: null
    };
}


@Injectable()
export class ActionsheetService {

  constructor(private http: Http) { }

  get(name: string): Observable<Actionsheet> {
    const path = `src/assets/actionsheets/${name}.json`;

    return this.http.get(path)
            .map(this.extractData)
            .catch(this.handleError);

  }

  private extractData(res: Response): Observable<any> {
      return res.json() || {};
  }

  private handleError(error: Response): Observable<any> {
      return error.json() || {};
  }
}
