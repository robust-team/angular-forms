import {
    RobustForms,
    Group,
    Text,
} from './';

describe('RobustForms :: RobustForms', () => {

    it('should create a group', () => {
        const jsonGroups:Array<any> = [{
            description: 'A simple group',
            questions: []
        }];
        expect(RobustForms.fromJson(jsonGroups))
            .toEqual([new Group('A simple group', [])]);
    });

    it('should create a group with a question', () => {
        const jsonGroups:Array<any> = [{
            description: 'A simple group with a question',
            questions: [{
                code: 'question-01',
                description: 'A simple question',
                fieldType: 'text',
                validations: []
            }]
        }];
        expect(RobustForms.fromJson(jsonGroups)).toEqual([
            new Group('A simple group with a question', [
                new Text('question-01', 'A simple question', 'text', [])
            ])
        ]);
    });

});
