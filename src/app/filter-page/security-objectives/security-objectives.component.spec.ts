import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityObjectivesComponent } from './security-objectives.component';

describe('SecurityObjectivesComponent', () => {
  let component: SecurityObjectivesComponent;
  let fixture: ComponentFixture<SecurityObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityObjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
