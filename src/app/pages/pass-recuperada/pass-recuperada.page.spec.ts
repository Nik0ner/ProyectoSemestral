import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassRecuperadaPage } from './pass-recuperada.page';

describe('PassRecuperadaPage', () => {
  let component: PassRecuperadaPage;
  let fixture: ComponentFixture<PassRecuperadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassRecuperadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
