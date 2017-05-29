import {
    Group,
    GroupBuilder,
    Question,
    QuestionFactory
} from '.';

export class RobustForms {

    public static fromJson(jsonGroups : Array<Group>): Array<Group> {

        return jsonGroups.map((group: Group) => {

            let groupBuilder = new GroupBuilder(group.description);

            for (let question of group.questions) {
                groupBuilder.addQuestion(new QuestionFactory(question).create());
            }

            return groupBuilder.build();
        });
    }
}