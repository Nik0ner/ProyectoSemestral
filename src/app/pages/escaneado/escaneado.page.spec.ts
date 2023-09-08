import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscaneadoPage } from './escaneado.page';

describe('EscaneadoPage', () => {
  let component: EscaneadoPage;
  let fixture: ComponentFixture<EscaneadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscaneadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
