import { expect, assert } from 'chai';

import { ValidationTypeNotFoundError } from '../../../../src/chain-of-responsibility/validator-factory/error';

describe('AngularForms :: ChainOfResponsibility :: ValidatorFactory :: Error :: ValidationTypeNotFoundError', () => {
  it('should be instantiable', () => {
    assert.ok(new ValidationTypeNotFoundError().name);
    assert.ok(new ValidationTypeNotFoundError('Message').message);
  });
});
