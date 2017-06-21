import { MaxLength } from '.';

describe('AngularForms :: Validation :: MaxLength', () => {
  it('should be instantiable', () => {
    expect(new MaxLength('maxlength', 'Message', 10)).toBeTruthy();
  });
});
