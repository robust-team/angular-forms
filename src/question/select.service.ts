import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Select } from '.';

@Injectable()
export class SelectService {

  public static onChangeOption(htmlFormControl: HTMLInputElement, formControl: FormControl, question: Select): void {
    if (htmlFormControl.value === question.editableOption) {
      formControl.setValue(null);
      htmlFormControl.value = question.editableOption;
    }
  }
}
