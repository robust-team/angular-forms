import { assert } from 'chai';
import { Email } from '../../src/validation';

describe('AngularForms :: Validation :: Email', () => {
  it('should be instantiable', () => {
    assert.ok(new Email('Message'));
  });
});
