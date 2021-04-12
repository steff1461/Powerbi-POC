import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSecuredLinkComponent } from './non-secured-link.component';

describe('NonSecuredLinkComponent', () => {
  let component: NonSecuredLinkComponent;
  let fixture: ComponentFixture<NonSecuredLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonSecuredLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSecuredLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
