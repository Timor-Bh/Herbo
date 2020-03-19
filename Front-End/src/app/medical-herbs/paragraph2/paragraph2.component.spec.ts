import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paragraph2Component } from './paragraph2.component';

describe('Paragraph2Component', () => {
  let component: Paragraph2Component;
  let fixture: ComponentFixture<Paragraph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paragraph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paragraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
