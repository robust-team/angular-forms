import { Select } from '.';

describe('RobustForms :: Question :: Select', () => {

    it('should be instantiable', () => {
        expect(new Select('A simple question', 'datatable', [], [], '')).toBeTruthy();
    });

})