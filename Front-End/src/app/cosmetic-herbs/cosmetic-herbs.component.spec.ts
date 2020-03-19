import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticHerbsComponent } from './cosmetic-herbs.component';

describe('CosmeticHerbsComponent', () => {
  let component: CosmeticHerbsComponent;
  let fixture: ComponentFixture<CosmeticHerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticHerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
