import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoinsComponent } from './addcoins.component';

describe('AddcoinsComponent', () => {
  let component: AddcoinsComponent;
  let fixture: ComponentFixture<AddcoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
