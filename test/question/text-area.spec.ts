import { assert } from 'chai';
import { TextArea } from '../../src/question';

describe('AngularForms :: Question :: TextArea', () => {
  it('should be instantiable', () => {
    assert.ok(new TextArea('question-code', 'A simple question', [], '', [], false, 'Answer'));
    assert.ok(new TextArea('question-code', 'A simple question'));
  });
});
