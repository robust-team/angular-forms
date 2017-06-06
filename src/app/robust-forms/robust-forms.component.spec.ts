import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RobustFormsComponent } from './robust-forms.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ValidationMessageModule } from './validation-message/validation-message.module';

describe('RobustFormsComponent', () => {
  let component: RobustFormsComponent;
  let fixture: ComponentFixture<RobustFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ValidationMessageModule],
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
