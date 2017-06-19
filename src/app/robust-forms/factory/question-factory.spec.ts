import { QuestionFactory } from '.';
import { Question, Text } from '../question';

describe('RobustForms :: Factory :: QuestionFactory', () => {
  it('should create a Question', () => {
    const question: Question<any> = new Text('Q-01', 'Question 01', [], 'text', null, [], null, null);
    expect(new QuestionFactory(question).create() instanceof Text).toBeTruthy();
  });
});
