import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MinValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('min' === validation.type) {
      return (new ValidatorFactory(validation)).createMinValidator();
    }

    return super.handle(validation);
  }
}
