import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NgMaskModule } from '@fagnerlima/ng-mask';
import { RobustFormsComponent } from '.';
import { DataTableComponent } from './data-table';
import { ValidationMessageModule } from './validation-message';

describe('RobustFormsComponent', () => {
  let component: RobustFormsComponent;
  let fixture: ComponentFixture<RobustFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ValidationMessageModule, NgMaskModule],
      declarations: [RobustFormsComponent, DataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobustFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
