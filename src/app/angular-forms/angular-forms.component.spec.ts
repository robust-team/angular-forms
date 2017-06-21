import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NgMaskModule } from '@fagnerlima/ng-mask';
import { AngularFormsComponent } from '.';
import { DataTableComponent } from './data-table';
import { ValidationMessageModule } from './validation-message';

describe('AngularForms :: AngularFormsComponent', () => {
  let component: AngularFormsComponent;
  let fixture: ComponentFixture<AngularFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ValidationMessageModule, NgMaskModule],
      declarations: [AngularFormsComponent, DataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
