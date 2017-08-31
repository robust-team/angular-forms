import { assert } from 'chai';
import { Text } from '../../src/question';

describe('AngularForms :: Question :: Text', () => {
  it('should be instantiable', () => {
    assert.ok(new Text('P-01', 'A simple question', [], '', [], 'Answer'));
  });
});
