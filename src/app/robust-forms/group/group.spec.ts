import { Group } from './group';

describe('RobustForms :: Group :: Group', () => {

    it('should be instantiable', () => {
        expect(new Group('A simple group', [])).toBeTruthy();
    });

})