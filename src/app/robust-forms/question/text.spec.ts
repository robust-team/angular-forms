import { Text } from '.';

describe('RobustForms :: Question :: Text', () => {

    it('should be instantiable', () => {
        expect(new Text('P-01', 'A simple question', 'text', [], '', '')).toBeTruthy();
    });

})