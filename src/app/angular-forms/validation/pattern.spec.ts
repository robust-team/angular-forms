import { Pattern } from '.';

describe('AngularForms :: Validation :: Pattern', () => {
  it('should be instantiable', () => {
    expect(new Pattern('pattern', 'Message', '^\\d{3}$')).toBeTruthy();
  });
});
