import { expect, assert } from 'chai';
import {
  ValidatorFactoryHandler, RequiredValidator, EmailValidator, MaxValidator, MinValidator,
  MaxLengthValidator, MinLengthValidator, PatternValidator
} from '../../../src/chain-of-responsibility/validator-factory';
import { ValidationTypeNotFoundError } from '../../../src/chain-of-responsibility/validator-factory/error';
import { Validation, Email, Max, Min, MaxLength, MinLength, Pattern, Required } from '../../../src/validation';

describe('AngularForms :: ChainOfResponsibility :: ValidatorFactory', () => {
  let validatorFactoryHandler: ValidatorFactoryHandler;

  beforeEach(() => {
    this.validatorFactoryHandler = new RequiredValidator();
    this.validatorFactoryHandler.append(new EmailValidator());
    this.validatorFactoryHandler.append(new MaxValidator());
    this.validatorFactoryHandler.append(new MinValidator());
    this.validatorFactoryHandler.append(new MaxLengthValidator());
    this.validatorFactoryHandler.append(new MinLengthValidator());
    this.validatorFactoryHandler.append(new PatternValidator());
  });

  it('should create a Email Validator', () => {
    const validation: Validation = new Email('email', 'Message');

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a Max Validator', () => {
    const validation: Validation = new Max('max', 'Message', 10);

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a Min Validator', () => {
    const validation: Validation = new Min('min', 'Message', 6);

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a MaxLength Validator', () => {
    const validation: Validation = new MaxLength('maxlength', 'Message', 6);

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a MinLength Validator', () => {
    const validation: Validation = new MinLength('minlength', 'Message', 6);

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a Pattern Validator', () => {
    const validation: Validation = new Pattern('pattern', 'Message', '^\\d{3}$');

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a Required Validator', () => {
    const validation: Validation = new Required('required', 'Message');

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should create a Required True Validator', () => {
    const validation: Validation = new Required('required', 'Message', true);

    assert.isTrue('function' === typeof this.validatorFactoryHandler.handle(validation));
  });

  it('should throw a ValidationTypeNotFoundError', () => {
    const validation: Validation = new Required('date', 'Message');

    // assert.throw(this.validatorFactoryHandler.handle(validation));

    try {
      this.validatorFactoryHandler.handle(validation);
    } catch (error) {
      assert.isTrue(error instanceof ValidationTypeNotFoundError);

      return;
    }

    throw new Error();
  });
});
