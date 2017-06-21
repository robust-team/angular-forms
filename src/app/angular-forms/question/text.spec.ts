import { Text } from '.';

describe('AngularForms :: Question :: Text', () => {
  it('should be instantiable', () => {
    expect(new Text('P-01', 'A simple question', [], 'text', '', [], 'Answer')).toBeTruthy();
  });
});
