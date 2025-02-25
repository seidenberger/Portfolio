import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionThreeComponent } from './description-three.component';

describe('DescriptionThreeComponent', () => {
  let component: DescriptionThreeComponent;
  let fixture: ComponentFixture<DescriptionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
