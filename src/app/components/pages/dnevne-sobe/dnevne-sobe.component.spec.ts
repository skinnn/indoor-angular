import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnevneSobeComponent } from './dnevne-sobe.component';

describe('DnevneSobeComponent', () => {
  let component: DnevneSobeComponent;
  let fixture: ComponentFixture<DnevneSobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnevneSobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnevneSobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
