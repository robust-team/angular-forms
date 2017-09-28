import { GroupBuilder, FieldsetBuilder, DataTableBuilder } from './builder';
import { Group, GroupType, Fieldset, DataTable } from './group';
import { Question } from './question';
import { QuestionFactory } from './factory';

export class AngularForms {

  public static async fromJson(jsonGroups: Group<any>[]): Promise<Group<any>[]> {
    return new Promise<Group<any>[]>(async (resolve: (groups: Group<any>[]) => void, reject: (error: string) => void) => {
      try {
        const groups: Group<any>[] = [];

        for await (const group of jsonGroups) {
          const groupBuilder: GroupBuilder<any> = GroupType.FIELDSET === group.type
            ? new FieldsetBuilder(group.code, group.description)
            : new DataTableBuilder(group.code, group.description, (<DataTable>group).validations);

          for await (const question of group.questions) {
            groupBuilder.addQuestion(
              GroupType.FIELDSET === group.type
                ? QuestionFactory.createQuestion(<Question<any>>question)
                : QuestionFactory.createQuestionList(<Question<any>[]>question)
            );
          }

          groups.push(groupBuilder.build());
        }

        resolve(groups);
      } catch (error) {
        reject(error);
      }
    });
  }
}
