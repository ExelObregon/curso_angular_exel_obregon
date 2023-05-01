import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaExelComponent } from './hola-exel.component';

describe('HolaExelComponent', () => {
  let component: HolaExelComponent;
  let fixture: ComponentFixture<HolaExelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolaExelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
