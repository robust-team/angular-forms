import {
    Question,
    Text,
    TextArea,
    Check,
    Radio,
    Select,
} from '.';

export class QuestionFactory {

    private _types = {
        'text': Text,
        'textarea': TextArea,
        'check': Check,
        'radio': Radio,
        'select': Select,
    };

    public constructor (
        private _question : Question
    ) { }

    public create() : Question {
        return this._types[this._question.fieldType].fromJson(this._question);
    }
}