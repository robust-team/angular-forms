import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class EmailValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('email' === validation.type) {
      return (new ValidatorFactory(validation)).createEmailValidator();
    }

    return super.handle(validation);
  }
}
