import { GroupBuilder, FieldsetBuilder, DataTableBuilder } from './builder';
import { Group, GroupType, Fieldset, DataTable } from './group';
import { Question } from './question';
import { QuestionFactory } from './factory';

export class AngularForms {

  public static fromJson(jsonGroups: Group[]): Group[] {
    return jsonGroups.map((group: Fieldset | DataTable) => {
      const groupBuilder: GroupBuilder<any> = GroupType.FIELDSET === group.type
        ? new FieldsetBuilder(group.code, group.description)
        : new DataTableBuilder(group.code, group.description, (<DataTable>group).validations);

      for (const question of group.questions) {
        groupBuilder.addQuestion(
          GroupType.FIELDSET === group.type
            ? QuestionFactory.createQuestion(<Question<any>>question)
            : QuestionFactory.createQuestionList(<Question<any>[]>question)
        );
      }

      return groupBuilder.build();
    });
  }
}
