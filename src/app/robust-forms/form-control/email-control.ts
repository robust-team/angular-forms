import { FormControl } from '.';

export class EmailControl implements FormControl {

    public constructor(
        private name: string
    ) {

    }

    public getType(): string {
        return 'email-control';
    }
}