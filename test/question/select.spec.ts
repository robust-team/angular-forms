import { assert } from 'chai';
import { Select } from '../../src/question';

describe('AngularForms :: Question :: Select', () => {
  it('should be instantiable', () => {
    assert.ok(new Select('P-01', 'A simple question', [], null, [], [], null, 'Select'));
  });
});
