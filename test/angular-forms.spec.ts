import { assert } from 'chai';
import { AngularForms } from '../src';
import { Group } from '../src/group';
import { Text } from '../src/question';

describe('AngularForms :: AngularForms', () => {

  it('should create a group', () => {
    const jsonGroups: any[] = [{
      code: 'group-01',
      description: 'A simple group',
      type: 'group-type',
      questions: []
    }];
    assert.deepEqual(AngularForms.fromJson(jsonGroups), [new Group('group-01', 'A simple group', 'group-type', [])]);
  });

  it('should create a group with a question', () => {
    const jsonGroups: any[] = [{
      code: 'group-01',
      description: 'A simple group with a question',
      type: 'group-type',
      questions: [{
        code: 'question-01',
        description: 'A simple question',
        dependencies: [],
        type: 'text',
        answer: 'My answer',
        validations: []
      }]
    }];
    assert.deepEqual(AngularForms.fromJson(jsonGroups), [
      new Group('group-01', 'A simple group with a question', 'group-type', [
        new Text('question-01', 'A simple question', [], 'text', 'My answer', [])
      ])
    ]);
  });

});
