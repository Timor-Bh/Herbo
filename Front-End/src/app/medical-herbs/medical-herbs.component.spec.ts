import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHerbsComponent } from './medical-herbs.component';

describe('MedicalHerbsComponent', () => {
  let component: MedicalHerbsComponent;
  let fixture: ComponentFixture<MedicalHerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
