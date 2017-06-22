import { ValidatorFn } from '@angular/forms';

import { ValidatorFactoryHandler } from '.';
import { Validation } from '../../validation';
import { ValidatorFactory } from '../../factory';

export class PatternValidator extends ValidatorFactoryHandler {

  public handle(validation: Validation): ValidatorFn {
    if ('pattern' === validation.type) {
      return (new ValidatorFactory(validation)).createPatternValidator();
    }

    return super.handle(validation);
  }
}
