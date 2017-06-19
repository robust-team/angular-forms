import { MinLength } from '.';

describe('RobustForms :: Validation :: MinLength', () => {
  it('should be instantiable', () => {
    expect(new MinLength('minlength', 'Message', 3)).toBeTruthy();
  });
});
