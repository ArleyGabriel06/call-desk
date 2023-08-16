import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateServPage } from './update-serv.page';

describe('UpdateServPage', () => {
  let component: UpdateServPage;
  let fixture: ComponentFixture<UpdateServPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateServPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
