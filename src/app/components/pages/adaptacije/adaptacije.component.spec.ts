import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptacijeComponent } from './adaptacije.component';

describe('AdaptacijeComponent', () => {
  let component: AdaptacijeComponent;
  let fixture: ComponentFixture<AdaptacijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptacijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
