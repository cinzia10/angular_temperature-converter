import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinComponent } from './kelvin.component';

describe('KelvinComponent', () => {
  let component: KelvinComponent;
  let fixture: ComponentFixture<KelvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelvinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
