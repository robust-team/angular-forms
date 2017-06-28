import { Choice } from '.';

export class Radio extends Choice {

  public static fromJson(question: Radio): Radio {

    return new Radio(
      question.name,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.options,
      question.defaultOption
    );
  }
}
