import { assert } from 'chai';
import { QuestionFactory } from '../../src/factory';
import { Question, Text } from '../../src/question';

describe('AngularForms :: Factory :: QuestionFactory', () => {
  it('should create a Question', () => {
    const question: Question<any> = new Text('Q-01', 'Question 01', [], null, [], null, null);

    assert.ok(QuestionFactory.createQuestion(question) instanceof Text);
  });
});
