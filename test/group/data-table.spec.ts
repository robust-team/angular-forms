import { assert } from 'chai';
import { DataTable } from '../../src/group';

describe('AngularForms :: Group :: DataTable', () => {
  it('should be instantiable', () => {
    assert.ok(new DataTable('G-01', 'A simple group', [[], []], []));
  });
});
