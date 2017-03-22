import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  @Input() checklist: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
