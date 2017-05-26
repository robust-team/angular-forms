import { Group } from './group/group';

export class RobustForms {

    public static fromJson(json : Object): Array<Group> {
        let groups = [];

        for (let jsonGroups in json) {
            groups.push(new Group(
                jsonGroups['description'],
                jsonGroups['questions']
            ));
        }

        return groups;
    }
}