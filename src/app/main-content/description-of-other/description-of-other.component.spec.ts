import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOfOtherComponent } from './description-of-other.component';

describe('DescriptionOfOtherComponent', () => {
  let component: DescriptionOfOtherComponent;
  let fixture: ComponentFixture<DescriptionOfOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionOfOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionOfOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
