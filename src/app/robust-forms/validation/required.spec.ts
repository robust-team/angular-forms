import { Required } from '.';

describe('RobustForms :: Validation :: Required', () => {
  it('should be instantiable', () => {
    expect(new Required('required', 'Message', false)).toBeTruthy();
  });
});
