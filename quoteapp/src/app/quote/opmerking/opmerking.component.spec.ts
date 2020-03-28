import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmerkingComponent } from './opmerking.component';

describe('OpmerkingComponent', () => {
  let component: OpmerkingComponent;
  let fixture: ComponentFixture<OpmerkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmerkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmerkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
