import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpmerkingComponent } from './add-opmerking.component';

describe('AddOpmerkingComponent', () => {
  let component: AddOpmerkingComponent;
  let fixture: ComponentFixture<AddOpmerkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOpmerkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpmerkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
