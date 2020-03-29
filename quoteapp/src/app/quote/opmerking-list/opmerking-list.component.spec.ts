import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmerkingListComponent } from './opmerking-list.component';

describe('OpmerkingListComponent', () => {
  let component: OpmerkingListComponent;
  let fixture: ComponentFixture<OpmerkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmerkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmerkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
