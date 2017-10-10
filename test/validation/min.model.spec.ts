import { assert } from 'chai';
import { Min } from '../../src/validation';

describe('AngularForms :: Validation :: Min', () => {
  it('should be instantiable', () => {
    assert.ok(new Min('Message', 10));
  });
});
