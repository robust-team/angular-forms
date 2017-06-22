import { assert } from 'chai';
import { MinLength } from '../../src/validation';

describe('AngularForms :: Validation :: MinLength', () => {
  it('should be instantiable', () => {
    assert.ok(new MinLength('minlength', 'Message', 3));
  });
});
