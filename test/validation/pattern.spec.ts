import { assert } from 'chai';
import { Pattern } from '../../src/validation';

describe('AngularForms :: Validation :: Pattern', () => {
  it('should be instantiable', () => {
    assert.ok(new Pattern('pattern', 'Message', '^\\d{3}$'));
  });
});
