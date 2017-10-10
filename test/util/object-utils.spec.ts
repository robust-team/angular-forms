import { assert } from 'chai';

import { ObjectUtils } from '../../src/util';

describe('AngularForms :: Util :: ObjectUtils', () => {
  it('should call clone method', () => {
    const object1: Object = { id: 1, name: 'Billy' };
    const object2: Object = ObjectUtils.clone(object1);

    object2['name'] = 'Bruce';

    assert.isTrue('Billy' === object1['name']);
    assert.isTrue('Bruce' === object2['name']);
  });

  it('should call isEquals method', () => {
    const object1: Object = { id: 1, name: 'Billy' };
    const object2: Object = { id: 1, name: 'Billy' };
    const object3: Object = { id: 2, name: 'Bruce' };

    assert.isTrue(ObjectUtils.isEquals(object1, object2));
    assert.isFalse(ObjectUtils.isEquals(object1, object3));
  });
});
