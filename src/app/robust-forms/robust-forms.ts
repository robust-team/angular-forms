import {
  DataTable,
  DataTableBuilder,
  Group,
  GroupBuilder,
  Question,
  QuestionFactory
} from '.';

export class RobustForms {

  public static fromJson(jsonGroups: Array<Group>): Array<Group> {

    return jsonGroups.map((group: Group) => {
      let groupBuilder = 'datatable' !== group.type
        ? new GroupBuilder(group.code, group.description, group.type)
        : new DataTableBuilder(
          group.code,
          group.description,
          group.type,
          (<DataTable> group).customType,
          (<DataTable> group).validations,
          (<DataTable> group).answers
        );

      for (let question of group.questions) {
        groupBuilder.addQuestion(new QuestionFactory(question).create());
      }

      return groupBuilder.build();
    });
  }
}
