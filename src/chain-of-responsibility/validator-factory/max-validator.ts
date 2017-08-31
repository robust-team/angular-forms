import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation, ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MaxValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if (ValidationType.MAX === validation.type) {
      return (new ValidatorFactory(validation)).createMaxValidator();
    }

    return super.handle(validation);
  }
}
