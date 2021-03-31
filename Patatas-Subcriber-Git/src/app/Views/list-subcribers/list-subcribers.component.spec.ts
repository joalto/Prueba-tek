import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcribersComponent } from './list-subcribers.component';

describe('ListSubcribersComponent', () => {
  let component: ListSubcribersComponent;
  let fixture: ComponentFixture<ListSubcribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubcribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubcribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
