import { Group } from '.';

describe('AngularForms :: Group :: Group', () => {
  it('should be instantiable', () => {
    expect(new Group('G-01', 'A simple group', 'group-type', [])).toBeTruthy();
  });
});
