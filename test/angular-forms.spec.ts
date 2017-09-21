import { assert } from 'chai';
import { AngularForms } from '../src';
import { Fieldset, DataTable } from '../src/group';
import { Text } from '../src/question';

describe('AngularForms :: AngularForms', () => {

  it('should create a group', () => {
    const jsonGroups: any[] = [{
      code: 'group-01',
      description: 'A simple group',
      type: 'group',
      questions: []
    }];

    assert.deepEqual(AngularForms.fromJson(jsonGroups), [new Fieldset('group-01', 'A simple group', [])]);
  });

  it('should create a group with a question', () => {
    const jsonGroups: any[] = [{
      code: 'group-01',
      description: 'A simple group with a question',
      type: 'group',
      questions: [{
        name: 'question-01',
        description: 'A simple question',
        dependencies: [],
        type: 'text',
        answer: 'My answer',
        validations: []
      }]
    }];

    assert.deepEqual(AngularForms.fromJson(jsonGroups), [
      new Fieldset('group-01', 'A simple group with a question', [
        new Text('question-01', 'A simple question', [], 'My answer', [])
      ])
    ]);
  });

  it('should create a datatable with questions', () => {
    const jsonGroups: any[] = [{
      code: 'group-01',
      description: 'A simple datatable with questions',
      type: 'datatable',
      questions: [
        [
          {
            name: 'question-01',
            description: 'A simple question 1',
            dependencies: [],
            type: 'text',
            answer: null,
            validations: [],
            disabled: false,
            mask: null,
            placeholder: null
          },
          {
            name: 'question-02',
            description: 'A simple question 2',
            dependencies: [],
            type: 'text',
            answer: null,
            validations: [],
            disabled: false,
            mask: null,
            placeholder: null
          }
        ],
        [
          {
            name: 'question-01',
            description: 'A simple question 1',
            dependencies: [],
            type: 'text',
            answer: 'My answer 1',
            validations: [],
            disabled: false,
            mask: null,
            placeholder: null
          },
          {
            name: 'question-02',
            description: 'A simple question 2',
            dependencies: [],
            type: 'text',
            answer: 'My answer 2',
            validations: [],
            disabled: false,
            mask: null,
            placeholder: null
          }
        ]
      ]
    }];

    assert.deepEqual(AngularForms.fromJson(jsonGroups), [
      new DataTable('group-01', 'A simple datatable with questions', [
        [
          new Text('question-01', 'A simple question 1', [], null, [], false, null, null),
          new Text('question-02', 'A simple question 2', [], null, [], false, null, null)
        ],
        [
          new Text('question-01', 'A simple question 1', [], 'My answer 1', [], false, null, null),
          new Text('question-02', 'A simple question 2', [], 'My answer 2', [], false, null, null)
        ]
      ])
    ]);
  });

});
