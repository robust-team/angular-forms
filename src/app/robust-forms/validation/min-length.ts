import { Validation } from './validation';

export class MinLength extends Validation {
    public constructor(
        message: string,
        private _value: number
    ) {
        super(message);
    }

    public get value(): number {
        return this._value;
    }
}
