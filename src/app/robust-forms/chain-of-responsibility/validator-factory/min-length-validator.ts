import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MinLengthValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('minlength' === validation.type) {
      return (new ValidatorFactory(validation)).createMinLengthValidator();
    }

    return super.handle(validation);
  }
}
