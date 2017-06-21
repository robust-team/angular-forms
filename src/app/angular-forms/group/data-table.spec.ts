import { DataTable } from '.';

describe('AngularForms :: Group :: DataTable', () => {
  it('should be instantiable', () => {
    expect(new DataTable('G-01', 'A simple group', 'group-type', [], [], null)).toBeTruthy();
  });
});
