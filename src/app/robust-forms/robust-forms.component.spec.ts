import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustFormsComponent } from './robust-forms.component';

describe('RobustFormsComponent', () => {
  let component: RobustFormsComponent;
  let fixture: ComponentFixture<RobustFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobustFormsComponent ]
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
