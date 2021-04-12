import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchematicDisplayComponent } from './schematic-display.component';

describe('SchematicDisplayComponent', () => {
  let component: SchematicDisplayComponent;
  let fixture: ComponentFixture<SchematicDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchematicDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchematicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
