import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadChamPage } from './cad-cham.page';

describe('CadChamPage', () => {
  let component: CadChamPage;
  let fixture: ComponentFixture<CadChamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadChamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
