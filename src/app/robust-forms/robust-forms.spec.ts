import {
    RobustForms,
    Group,
    Text
} from './';

describe('RobustForms', () => {

  it('should create a group', () => {
      const jsonGroups = [{description: "A simple group"}]
      expect(RobustForms.fromJson(jsonGroups))
        .toBe(new Group('A simple group', []));
  });

  it('should create a group with a question', () => {
      const jsonGroups = [{description: "A simple group with a question"}]
      expect(RobustForms.fromJson(jsonGroups))
        .toBe(new Group('A simple group with a question', [
            new Text('A simple question', '', 'text', [], '', '')
        ]));
  });

});
