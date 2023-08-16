import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeadmPage } from './homeadm.page';

describe('HomeadmPage', () => {
  let component: HomeadmPage;
  let fixture: ComponentFixture<HomeadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
