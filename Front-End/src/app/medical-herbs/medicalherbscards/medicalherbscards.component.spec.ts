import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalherbscardsComponent } from './medicalherbscards.component';

describe('MedicalherbscardsComponent', () => {
  let component: MedicalherbscardsComponent;
  let fixture: ComponentFixture<MedicalherbscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalherbscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalherbscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
