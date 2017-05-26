import { Radio } from '.';

describe('RobustForms :: Question :: Radio', () => {

    it('should be instantiable', () => {
        expect(new Radio('A simple question', '', 'radio', [], [], '')).toBeTruthy();
    });

})