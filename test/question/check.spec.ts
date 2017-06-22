import { assert } from 'chai';
import { Check } from '../../src/question';

describe('AngularForms :: Question :: Check', () => {
  it('should be instantiable', () => {
    assert.ok(new Check('P-01', 'A simple question', [], 'check', true, [], false));
  });
});
