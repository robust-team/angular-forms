import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class RequiredValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('required' === validation.type) {
      return (new ValidatorFactory(validation)).createRequiredValidator();
    }

    return super.handle(validation);
  }
}
