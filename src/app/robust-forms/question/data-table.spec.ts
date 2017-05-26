import { DataTable } from '.';

describe('RobustForms :: Question :: DataTable', () => {

    it('should be instantiable', () => {
        expect(new DataTable('A simple question', 'datatable', [], '', [])).toBeTruthy();
    });

})