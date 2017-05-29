import { Choice } from './choice';

export class Select extends Choice {

    public fromJson(question : Select) : Select {
        return new Select(
            question.description,
            question.fieldType,
            question.validations,
            question.options,
            question.defaultOption
        );
    }
}
