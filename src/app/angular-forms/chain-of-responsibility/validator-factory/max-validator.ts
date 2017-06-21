import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MaxValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('max' === validation.type) {
      return (new ValidatorFactory(validation)).createMaxValidator();
    }

    return super.handle(validation);
  }
}
