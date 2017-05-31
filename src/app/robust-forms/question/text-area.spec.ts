import { TextArea } from '.';

describe('RobustForms :: Question :: TextArea', () => {
  it('should be instantiable', () => {
    expect(new TextArea('question-code', 'A simple question', 'textarea', [], ''))
  })
})