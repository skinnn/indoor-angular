import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlizniPlakariComponent } from './klizni-plakari.component';

describe('KlizniPlakariComponent', () => {
  let component: KlizniPlakariComponent;
  let fixture: ComponentFixture<KlizniPlakariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlizniPlakariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlizniPlakariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
