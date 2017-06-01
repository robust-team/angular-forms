import { FormGroup } from '@angular/forms';

import { ReactiveFormsFactory } from '.';
import { DataTable, Group, Question, Text } from '.';

describe('RobustForms :: ReactiveFormsFactory', () => {
  it('should create a FormGroup from Groups', () => {
    const groups: Group[] = [
      new Group('group-01', 'Group 01', 'fieldset', []),
      new Group('group-02', 'Group 02', 'fieldset', [])
    ];
    
    expect(ReactiveFormsFactory.createFormGroupFromGroups(groups)).toEqual(jasmine.any(FormGroup));
  });

  it('should create a FormGroup from DataTables', () => {
    const groups: Group[] = [
      new DataTable('group-01', 'Group 01', 'datatable', [], 'consumo-agua', [], []),
      new DataTable('group-02', 'Group 02', 'datatable', [], 'efluente', [], [])
    ];

    expect(ReactiveFormsFactory.createFormGroupFromGroups(groups)).toEqual(jasmine.any(FormGroup));
  });

  it('should create a FormGroup from Questions', () => {
    const questions: Question[] = [
      new Text('question-01', 'Question 01', 'text', []),
      new Text('question-02', 'Question 02', 'text', [])
    ];

    expect(ReactiveFormsFactory.createFormGroupFromQuestions(questions)).toEqual(jasmine.any(FormGroup));
  });
});
