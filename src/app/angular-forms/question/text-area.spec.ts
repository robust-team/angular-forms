import { TextArea } from '.';

describe('AngularForms :: Question :: TextArea', () => {
  it('should be instantiable', () => {
    expect(new TextArea('question-code', 'A simple question', [], 'textarea', '', [], 'Answer'));
  });
});
