import { Required } from '.';

describe('AngularForms :: Validation :: Required', () => {
  it('should be instantiable', () => {
    expect(new Required('required', 'Message', false)).toBeTruthy();
  });
});
