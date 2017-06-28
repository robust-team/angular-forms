import { GroupBuilder, FieldsetBuilder, DataTableBuilder } from './builder';
import { Group, Fieldset, DataTable } from './group';
import { Question } from './question';
import { QuestionFactory } from './factory';

export class AngularForms {

  public static fromJson(jsonGroups: Group[]): Group[] {
    return jsonGroups.map((group: Fieldset | DataTable) => {
      const groupBuilder: GroupBuilder<any> = 'group' === group.type
        ? new FieldsetBuilder(group.code, group.description, group.type)
        : new DataTableBuilder(group.code, group.description, group.type, (<DataTable>group).validations);

      for (const question of group.questions) {
        groupBuilder.addQuestion(
          'group' === group.type
            ? (new QuestionFactory()).createSimpleQuestion(<Question<any>>question)
            : (new QuestionFactory()).createQuestionList(<Question<any>[]>question)
        );
      }

      return groupBuilder.build();
    });
  }
}
