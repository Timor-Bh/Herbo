import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductscardsComponent } from './allproductscards.component';

describe('AllproductscardsComponent', () => {
  let component: AllproductscardsComponent;
  let fixture: ComponentFixture<AllproductscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproductscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
