import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ActionsheetComponent } from './actionsheet.component';
import { ActionsheetService } from './actionsheet.service';
import { ChecklistComponent } from './checklist/checklist.component';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';

const routes: Routes = [
    {
        path: 'actionsheet/:name',
        component: ActionsheetComponent,
    },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  declarations: [
    ActionsheetComponent,
    ChecklistComponent,
    CheatsheetComponent
  ],
  providers: [ActionsheetService],
})
export class ActionsheetModule { }
