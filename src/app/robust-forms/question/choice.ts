import { Question } from './question';
import { Validation } from '../validation/validation';

export abstract class Choice extends Question {
    public constructor(
        description: string,
        questionType: string,
        fieldType: string,
        validations: Validation[],
        private _options: string[],
        private _defaultOption: string
    ) {
        super(description, questionType, fieldType, validations);
    }

    public get options(): string[] {
        return this._options;
    }

    public get defaultOption(): string {
        return this._defaultOption;
    }
}
