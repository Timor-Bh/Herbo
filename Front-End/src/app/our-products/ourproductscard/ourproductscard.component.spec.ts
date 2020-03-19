import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductscardComponent } from './ourproductscard.component';

describe('OurproductscardComponent', () => {
  let component: OurproductscardComponent;
  let fixture: ComponentFixture<OurproductscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
