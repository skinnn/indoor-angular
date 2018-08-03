import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecijeSobeComponent } from './decije-sobe.component';

describe('DecijeSobeComponent', () => {
  let component: DecijeSobeComponent;
  let fixture: ComponentFixture<DecijeSobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecijeSobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecijeSobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
