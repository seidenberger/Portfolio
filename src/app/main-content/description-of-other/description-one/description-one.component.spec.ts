import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOneComponent } from './description-one.component';

describe('DescriptionOneComponent', () => {
  let component: DescriptionOneComponent;
  let fixture: ComponentFixture<DescriptionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
