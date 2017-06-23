import { assert } from 'chai';
import { MaxLength } from '../../src/validation';

describe('AngularForms :: Validation :: MaxLength', () => {
  it('should be instantiable', () => {
    assert.ok(new MaxLength('maxlength', 'Message', 10));
  });
});
