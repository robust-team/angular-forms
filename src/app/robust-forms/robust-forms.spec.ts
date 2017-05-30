import {
    RobustForms,
    Group,
    Text
} from './';

describe('RobustForms', () => {

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
            description: "A simple group with a question",
            questions: [{ description: 'A simple question', fieldType: 'text' }]
        }];
        expect(RobustForms.fromJson(jsonGroups))
            .toEqual(new Group('A simple group with a question', [
                new Text('P-01', 'A simple question', 'text', [], '', '')
            ]));
    });

});
