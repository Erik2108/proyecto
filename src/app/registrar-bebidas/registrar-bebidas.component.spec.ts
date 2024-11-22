import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBebidasComponent } from './registrar-bebidas.component';

describe('RegistrarBebidasComponent', () => {
  let component: RegistrarBebidasComponent;
  let fixture: ComponentFixture<RegistrarBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarBebidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
