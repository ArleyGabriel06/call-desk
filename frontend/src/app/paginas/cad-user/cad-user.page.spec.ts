import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadUserPage } from './cad-user.page';

describe('CadUserPage', () => {
  let component: CadUserPage;
  let fixture: ComponentFixture<CadUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
