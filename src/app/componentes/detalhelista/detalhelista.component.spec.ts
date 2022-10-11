import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhelistaComponent } from './detalhelista.component';

describe('DetalhelistaComponent', () => {
  let component: DetalhelistaComponent;
  let fixture: ComponentFixture<DetalhelistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhelistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
