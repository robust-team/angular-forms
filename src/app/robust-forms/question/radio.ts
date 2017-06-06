import { Choice } from '.';

export class Radio extends Choice {

  public static fromJson(question: Radio): Radio {
    return new Radio(
      question.code,
      question.description,
      question.dependencies,
      question.fieldType,
      question.answer,
      question.validations,
      question.options,
      question.defaultOption
    );
  }
}
