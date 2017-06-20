import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MaxLengthValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('maxlength' === validation.type) {
      return new ValidatorFactory(validation).createMaxLengthValidator();
    }

    return super.handle(validation);
  }
}
