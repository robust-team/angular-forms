import { assert } from 'chai';
import { Radio } from '../../src/question';

describe('AngularForms :: Question :: Radio', () => {
  it('should be instantiable', () => {
    assert.ok(new Radio('P-01', 'A simple question', [], 'Option 1', [], true, ['Option 1', 'Option 2'], 'Option 2'));
  });
});
