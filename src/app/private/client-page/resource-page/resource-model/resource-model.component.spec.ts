import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceModelComponent } from './resource-model.component';

describe('ResourceModelComponent', () => {
  let component: ResourceModelComponent;
  let fixture: ComponentFixture<ResourceModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
