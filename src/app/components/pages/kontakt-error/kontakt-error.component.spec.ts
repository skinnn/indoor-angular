import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktErrorComponent } from './kontakt-error.component';

describe('KontaktErrorComponent', () => {
  let component: KontaktErrorComponent;
  let fixture: ComponentFixture<KontaktErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
