import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsChamaniquesComponent } from './soins-chamaniques.component';

describe('SoinsChamaniquesComponent', () => {
  let component: SoinsChamaniquesComponent;
  let fixture: ComponentFixture<SoinsChamaniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoinsChamaniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinsChamaniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
