import { assert } from 'chai';
import { Fieldset } from '../../src/group';
import { Text } from '../../src/question';

describe('AngularForms :: Group :: Fieldset', () => {
  it('should be instantiable', () => {
    assert.ok(new Fieldset('G-01', 'A simple group', []));
  });

  it('should call getQuestionByName method', () => {
    const fieldset: Fieldset = new Fieldset('G-01', 'A simple group', [new Text('Q-01', 'A simple question')]);

    assert.isTrue(fieldset.getQuestionByName('Q-01') instanceof Text);
  });
});
