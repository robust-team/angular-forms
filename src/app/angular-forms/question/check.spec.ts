import { Check } from '.';

describe('AngularForms :: Question :: Check', () => {
  it('should be instantiable', () => {
    expect(new Check('P-01', 'A simple question', [], 'check', true, [], false)).toBeTruthy();
  });
});
