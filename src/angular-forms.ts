import { DataTableBuilder, GroupBuilder } from './builder';
import { DataTable, Group } from './group';
import { Question } from './question';
import { QuestionFactory } from './factory';

export class AngularForms {

  public static fromJson(jsonGroups: Group[]): Group[] {

    const groups: Group[] = [];

    for (const group of jsonGroups) {
      const groupBuilder: GroupBuilder = 'datatable' !== group.type
        ? new GroupBuilder(group.code, group.description, group.type)
        : new DataTableBuilder(
          group.code,
          group.description,
          group.type,
          (<DataTable> group).validations,
          (<DataTable> group).answers
        );

      for (const question of group.questions) {
        groupBuilder.addQuestion(new QuestionFactory(question).create());
      }

      groups.push(groupBuilder.build());
    }

    return groups;
  }
}
