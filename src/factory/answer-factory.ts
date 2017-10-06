import { isNullOrUndefined } from 'util';

import { Answer } from '../question';

export class AnswerFactory {

  public static create<AnswerType>(answer: Answer<AnswerType> | AnswerType): Answer<AnswerType> {
    return !isNullOrUndefined(answer) && 'object' === typeof answer
      ? new Answer<AnswerType>(answer['value'], answer['id'])
      : new Answer<AnswerType>(answer);
  }
}
