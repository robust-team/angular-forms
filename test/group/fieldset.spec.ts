import { assert } from 'chai';
import { Fieldset } from '../../src/group';

describe('AngularForms :: Group :: Fieldset', () => {
  it('should be instantiable', () => {
    assert.ok(new Fieldset('G-01', 'A simple group', []));
  });
});
