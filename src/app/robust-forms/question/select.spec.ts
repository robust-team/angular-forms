import { Select } from '.';

describe('RobustForms :: Question :: Select', () => {

    it('should be instantiable', () => {
        expect(new Select('P-01', 'A simple question', 'datatable', [], [], '', null, 'Select')).toBeTruthy();
    });

})