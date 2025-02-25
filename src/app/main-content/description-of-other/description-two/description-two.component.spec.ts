import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTwoComponent } from './description-two.component';

describe('DescriptionTwoComponent', () => {
  let component: DescriptionTwoComponent;
  let fixture: ComponentFixture<DescriptionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
