import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanadmPage } from './kanbanadm.page';

describe('KanbanadmPage', () => {
  let component: KanbanadmPage;
  let fixture: ComponentFixture<KanbanadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KanbanadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
