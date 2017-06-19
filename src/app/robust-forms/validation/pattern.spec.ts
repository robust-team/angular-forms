import { Pattern } from '.';

describe('RobustForms :: Validation :: Pattern', () => {
  it('should be instantiable', () => {
    expect(new Pattern('pattern', 'Message', '^\\d{3}$')).toBeTruthy();
  });
});
