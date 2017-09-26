import { assert } from 'chai';
import { Required } from '../../src/validation';

describe('AngularForms :: Validation :: Required', () => {
  it('should be instantiable', () => {
    assert.ok(new Required('Message', false).message);
  });
});
