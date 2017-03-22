import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsheetComponent } from './actionsheet.component';

describe('ActionsheetComponent', () => {
  let component: ActionsheetComponent;
  let fixture: ComponentFixture<ActionsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
