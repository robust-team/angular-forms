import { assert } from 'chai';
import { Select } from '../../src/question';

describe('AngularForms :: Question :: Select', () => {
  it('should be instantiable', () => {
    assert.ok(new Select('P-01', 'A simple question', [], null, [], false, ['Option 1', 'Option 2'], 'Option 2', 'Option 2', 'Select'));
    assert.ok(new Select('P-01', 'A simple question', [], null, [], false, [
      { value: 'op-1', description: 'Option 1' },
      { value: 'op-2', description: 'Option 2' }
    ], 'Option 2', 'Option 2', 'Select'));
    assert.ok(new Select('P-01', 'A simple question'));
  });
});
