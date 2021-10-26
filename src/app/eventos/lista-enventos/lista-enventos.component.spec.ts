import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnventosComponent } from './lista-enventos.component';

describe('ListaEnventosComponent', () => {
  let component: ListaEnventosComponent;
  let fixture: ComponentFixture<ListaEnventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEnventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEnventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
