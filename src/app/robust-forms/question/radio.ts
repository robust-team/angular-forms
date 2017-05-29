import { Choice } from './choice';

export class Radio extends Choice {

    public static fromJson(question : Radio) : Radio {
        return new Radio(
            question.description,
            question.fieldType,
            question.validations,
            question.options,
            question.defaultOption
        );
    }
}