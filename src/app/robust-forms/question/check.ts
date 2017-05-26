import { Question } from './question';
import { Validation } from '../validation/validation';

export class Check extends Question {
    public constructor(
        description: string,
        questionType: string,
        fieldType: string,
        validations: Validation[],
        private _defaultOption: boolean
    ) {
        super(description, questionType, fieldType, validations);
    }

    public get defaultOption(): boolean {
        return this._defaultOption;
    }
}
