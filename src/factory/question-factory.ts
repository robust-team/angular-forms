import { Question, Text, TextArea, Checkbox, Radio, Select } from '../question';

export class QuestionFactory {

  private static types: any = {
    'checkbox': Checkbox,
    'radio': Radio,
    'select': Select,
    'text': Text,
    'textarea': TextArea,
  };

  public static createSimpleQuestion(question: Question<any>): Question<any> {
    return QuestionFactory.types[question.type].fromJson(question);
  }

  public static createQuestionList(questionList: Question<any>[]): Question<any>[] {
    return questionList.map((question: Question<any>) => QuestionFactory.createSimpleQuestion(question));
  }
}
