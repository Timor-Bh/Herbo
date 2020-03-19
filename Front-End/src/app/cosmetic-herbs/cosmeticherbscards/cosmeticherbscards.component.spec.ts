import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticherbscardsComponent } from './cosmeticherbscards.component';

describe('CosmeticherbscardsComponent', () => {
  let component: CosmeticherbscardsComponent;
  let fixture: ComponentFixture<CosmeticherbscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticherbscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticherbscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
