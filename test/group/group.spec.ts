import { assert } from 'chai';
import { Group } from '../../src/group';

describe('AngularForms :: Group :: Group', () => {
  it('should be instantiable', () => {
    assert.ok(new Group('G-01', 'A simple group', 'group-type', []));
  });
});
