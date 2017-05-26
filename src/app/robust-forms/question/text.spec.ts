import { Text } from '.';

describe('RobustForms :: Question :: Text', () => {

    it('should be instantiable', () => {
        expect(new Text('A simple question', 'text', [], '', '')).toBeTruthy();
    });

})