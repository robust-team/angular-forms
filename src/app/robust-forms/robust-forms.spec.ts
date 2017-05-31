import {
    RobustForms,
    Group,
    Text,
} from './';

describe('RobustForms :: RobustForms', () => {

    it('should create a group', () => {
        const jsonGroups:Array<any> = [{
            code: 'group-01',
            description: 'A simple group',
            groupType: 'group-type',
            questions: []
        }];
        expect(RobustForms.fromJson(jsonGroups))
            .toEqual([new Group('group-01', 'A simple group', 'group-type', [])]);
    });

    it('should create a group with a question', () => {
        const jsonGroups:Array<any> = [{
            code: 'group-01',
            description: 'A simple group with a question',
            groupType: 'group-type',
            questions: [{
                code: 'question-01',
                description: 'A simple question',
                fieldType: 'text',
                validations: []
            }]
        }];
        expect(RobustForms.fromJson(jsonGroups)).toEqual([
            new Group('group-01', 'A simple group with a question', 'group-type', [
                new Text('question-01', 'A simple question', 'text', [])
            ])
        ]);
    });

});
