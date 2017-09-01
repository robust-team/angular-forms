import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation, ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class MinValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if (ValidationType.MIN === validation.type) {
      return (new ValidatorFactory(validation)).createMinValidator();
    }

    return super.handle(validation);
  }
}
