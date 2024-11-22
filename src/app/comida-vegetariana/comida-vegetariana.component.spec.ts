import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaVegetarianaComponent } from './comida-vegetariana.component';

describe('ComidaVegetarianaComponent', () => {
  let component: ComidaVegetarianaComponent;
  let fixture: ComponentFixture<ComidaVegetarianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComidaVegetarianaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaVegetarianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
