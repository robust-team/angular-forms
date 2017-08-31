import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation, ValidationType } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class EmailValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if (ValidationType.EMAIL === validation.type) {
      return (new ValidatorFactory(validation)).createEmailValidator();
    }

    return super.handle(validation);
  }
}
