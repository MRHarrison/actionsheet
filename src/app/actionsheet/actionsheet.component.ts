import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ActionsheetService, Actionsheet } from './actionsheet.service';

@Component({
  selector: 'as-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss']
})
export class ActionsheetComponent implements OnInit {
  actionsheet: any;

  constructor(
      private actionsheetService: ActionsheetService,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.actionsheetService.get(params['name']))
        .subscribe(actionsheet => this.actionsheet = actionsheet);

    // this.actionsheetService.get()
    //   .subscribe(actionsheet => this.actionsheet = actionsheet);
  }

}
