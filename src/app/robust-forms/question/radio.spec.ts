import { Radio } from '.';

describe('RobustForms :: Question :: Radio', () => {
  it('should be instantiable', () => {
    expect(new Radio('P-01', 'A simple question', [], 'radio', '', [], [], '')).toBeTruthy();
  });
});
