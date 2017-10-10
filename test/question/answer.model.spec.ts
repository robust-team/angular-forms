import { assert } from 'chai';

import { Answer } from '../../src/question';

describe('AngularForms :: Question :: Answer', () => {
  it('should be instantiable', () => {
    assert.ok(new Answer('My answer', 1));
    assert.ok(new Answer('My new answer'));
  });
});
