import { expect, assert } from 'chai';
import {
  ValidatorFactoryHandler, RequiredValidator, EmailValidator, MaxValidator, MinValidator,
  MaxLengthValidator, MinLengthValidator, PatternValidator
} from '../../../src/chain-of-responsibility/validator-factory';
import { Validation, Email, Max, Min, MaxLength, MinLength, Pattern, Required } from '../../../src/validation';

describe('AngularForms :: ChainOfResponsibility :: ValidatorFactory', () => {
  let validatorFactoryHandler: ValidatorFactoryHandler;

  beforeEach(() => {
    validatorFactoryHandler = new RequiredValidator();
    validatorFactoryHandler.append(new EmailValidator());
    validatorFactoryHandler.append(new MaxValidator());
    validatorFactoryHandler.append(new MinValidator());
    validatorFactoryHandler.append(new MaxLengthValidator());
    validatorFactoryHandler.append(new MinLengthValidator());
    validatorFactoryHandler.append(new PatternValidator());
  });

  it('should create a Email Validator', () => {
    const validation: Validation = new Email('Message');

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Max Validator', () => {
    const validation: Validation = new Max('Message', 10);

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Min Validator', () => {
    const validation: Validation = new Min('Message', 6);

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a MaxLength Validator', () => {
    const validation: Validation = new MaxLength('Message', 6);

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a MinLength Validator', () => {
    const validation: Validation = new MinLength('Message', 6);

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Pattern Validator with string', () => {
    const validation: Validation = new Pattern('Message', '^\\d{3}$');

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Pattern Validator with regex', () => {
    const validation: Validation = new Pattern('Message', '/^\d{3}[A-Z]{4}$/i');

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Required Validator', () => {
    const validation: Validation = new Required('Message');

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });

  it('should create a Required True Validator', () => {
    const validation: Validation = new Required('Message', true);

    assert.isTrue('function' === typeof validatorFactoryHandler.handle(validation));
  });
});
