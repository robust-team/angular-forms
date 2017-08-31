import { assert } from 'chai';
import { Max } from '../../src/validation';

describe('AngularForms :: Validation :: Max', () => {
  it('should be instantiable', () => {
    assert.ok(new Max('Message', 10));
  });
});
