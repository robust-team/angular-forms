import { ValidatorFn } from '@angular/forms';

import { Validation } from '../../validation';
import { ValidationTypeNotFoundError } from './error';

export abstract class ValidatorFactoryHandler {

  private nextHandler: ValidatorFactoryHandler;

  public append(handler: ValidatorFactoryHandler): void {
    if (this.nextHandler) {
      this.nextHandler.append(handler);
    } else {
      this.nextHandler = handler;
    }
  }

  public handle(validation: Validation): ValidatorFn {
    if (this.nextHandler) {
      return this.nextHandler.handle(validation);
    }

    throw new ValidationTypeNotFoundError(`Validation Type (${validation.type}) not found.`);
  }
}
