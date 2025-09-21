import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTranslatedComponent } from './button-translated.component';

describe('ButtonTranslatedComponent', () => {
  let component: ButtonTranslatedComponent;
  let fixture: ComponentFixture<ButtonTranslatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTranslatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTranslatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
