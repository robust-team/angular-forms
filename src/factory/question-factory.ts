import { Question, QuestionType, Text, TextArea, Checkbox, Radio, Select } from '../question';

export class QuestionFactory {

  public static createQuestion(question: Question<any>): Question<any> {
    switch (question.type) {
      case QuestionType.CHECKBOX:
        return Checkbox.fromJson(<Checkbox>question);
      case QuestionType.RADIO:
        return Radio.fromJson(<Radio>question);
      case QuestionType.SELECT:
        return Select.fromJson(<Select>question);
      case QuestionType.TEXTAREA:
        return TextArea.fromJson(<TextArea>question);
      default:
        return Text.fromJson(<Text>question);
    }
  }

  public static createQuestionList(questionList: Question<any>[]): Question<any>[] {
    return questionList.map((question: Question<any>) => QuestionFactory.createQuestion(question));
  }
}
