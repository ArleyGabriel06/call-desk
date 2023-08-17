import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadServPage } from './cad-serv.page';

describe('CadServPage', () => {
  let component: CadServPage;
  let fixture: ComponentFixture<CadServPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadServPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
