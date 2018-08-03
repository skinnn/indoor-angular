import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuhinjeComponent } from './kuhinje.component';

describe('KuhinjeComponent', () => {
  let component: KuhinjeComponent;
  let fixture: ComponentFixture<KuhinjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuhinjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuhinjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
