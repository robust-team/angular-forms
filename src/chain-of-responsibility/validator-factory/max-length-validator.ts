import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation, ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MaxLengthValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if (ValidationType.MAX_LENGTH === validation.type) {
      return (new ValidatorFactory(validation)).createMaxLengthValidator();
    }

    return super.handle(validation);
  }
}
