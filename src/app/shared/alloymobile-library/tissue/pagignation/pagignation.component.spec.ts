import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagignationComponent } from './pagignation.component';

describe('PagignationComponent', () => {
  let component: PagignationComponent;
  let fixture: ComponentFixture<PagignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
