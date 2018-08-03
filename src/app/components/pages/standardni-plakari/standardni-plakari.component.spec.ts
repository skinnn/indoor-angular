import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardniPlakariComponent } from './standardni-plakari.component';

describe('StandardniPlakariComponent', () => {
  let component: StandardniPlakariComponent;
  let fixture: ComponentFixture<StandardniPlakariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardniPlakariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardniPlakariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
