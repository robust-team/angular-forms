import { assert } from 'chai';

import { StringUtils } from '../../src/util';

describe('AngularForms :: Util :: StringUtils', () => {
  it('should call convertToString method', () => {
    assert.isTrue('123' === StringUtils.convertToString(123));
    assert.isTrue('Angular' === StringUtils.convertToString('Angular'));
    assert.isNull(StringUtils.convertToString(null));
  });
});
