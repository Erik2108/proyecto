import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaChatarraComponent } from './comida-chatarra.component';

describe('ComidaChatarraComponent', () => {
  let component: ComidaChatarraComponent;
  let fixture: ComponentFixture<ComidaChatarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComidaChatarraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaChatarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
