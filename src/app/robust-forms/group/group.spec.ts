import { Group } from './group';

describe('RobustForms :: Group :: Group', () => {

    it('should be instantiable', () => {
        expect(new Group('G-01', 'A simple group', [])).toBeTruthy();
    });

})