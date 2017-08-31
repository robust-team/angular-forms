import { assert } from 'chai';
import { Checkbox } from '../../src/question';

describe('AngularForms :: Question :: Checkbox', () => {
  it('should be instantiable', () => {
    assert.ok(new Checkbox('P-01', 'A simple question', [], true, [], false, false));
  });
});
