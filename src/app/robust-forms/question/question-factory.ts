import {
    FieldType,
    Question,
    Text
} from '.';

export class QuestionFactory {

    private _types = {
        text: Text
    }

    public constructor (
        private _question : Question
    ) { }

    public create() : Question {
        return this._types[this._question.fieldType].fromJson(this._question);
    }
}