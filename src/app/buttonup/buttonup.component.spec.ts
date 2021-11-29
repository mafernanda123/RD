import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonupComponent } from './buttonup.component';

describe('ButtonupComponent', () => {
  let component: ButtonupComponent;
  let fixture: ComponentFixture<ButtonupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
