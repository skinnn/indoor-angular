import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktOkComponent } from './kontakt-ok.component';

describe('KontaktOkComponent', () => {
  let component: KontaktOkComponent;
  let fixture: ComponentFixture<KontaktOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
