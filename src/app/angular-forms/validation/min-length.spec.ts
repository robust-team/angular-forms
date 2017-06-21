import { MinLength } from '.';

describe('AngularForms :: Validation :: MinLength', () => {
  it('should be instantiable', () => {
    expect(new MinLength('minlength', 'Message', 3)).toBeTruthy();
  });
});
