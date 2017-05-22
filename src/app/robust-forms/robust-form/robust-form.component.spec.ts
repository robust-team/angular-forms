import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustFormComponent } from './robust-form.component';

describe('RobustFormComponent', () => {
  let component: RobustFormComponent;
  let fixture: ComponentFixture<RobustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
