import { MaxLength } from '.';

describe('RobustForms :: Validation :: MaxLength', () => {
  it('should be instantiable', () => {
    expect(new MaxLength('maxlength', 'Message', 10)).toBeTruthy();
  });
});
