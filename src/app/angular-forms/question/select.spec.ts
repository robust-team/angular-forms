import { Select } from '.';

describe('AngularForms :: Question :: Select', () => {
  it('should be instantiable', () => {
    expect(new Select('P-01', 'A simple question', [], 'datatable', null, [], [], null, 'Select')).toBeTruthy();
  });
});
