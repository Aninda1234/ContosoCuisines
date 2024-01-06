import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineGroupComponent } from './cuisine-group.component';

describe('CuisineGroupComponent', () => {
  let component: CuisineGroupComponent;
  let fixture: ComponentFixture<CuisineGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuisineGroupComponent]
    });
    fixture = TestBed.createComponent(CuisineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
