import { assert } from 'chai';
import { Radio } from '../../src/question';

describe('AngularForms :: Question :: Radio', () => {
  it('should be instantiable', () => {
    assert.ok(new Radio('P-01', 'A simple question', [], 'Option 1', [], true, ['Option 1', 'Option 2'], 'Option 2'));
    assert.ok(new Radio('P-01', 'A simple question', [], 'Option 1', [], true, [
      { value: 'op-1', description: 'Option 1' },
      { value: 'op-2', description: 'Option 2' }
    ], 'Option 2'));
    assert.ok(new Radio('P-01', 'A simple question'));
  });
});
