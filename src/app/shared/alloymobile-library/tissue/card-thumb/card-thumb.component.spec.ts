import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThumbComponent } from './card-thumb.component';

describe('CardThumbComponent', () => {
  let component: CardThumbComponent;
  let fixture: ComponentFixture<CardThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
