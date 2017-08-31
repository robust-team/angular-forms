import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation, ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class PatternValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if (ValidationType.PATTERN === validation.type) {
      return (new ValidatorFactory(validation)).createPatternValidator();
    }

    return super.handle(validation);
  }
}
