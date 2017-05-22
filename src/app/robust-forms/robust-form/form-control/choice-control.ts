import { FormControl } from './form-control'

export interface ChoiceControl extends FormControl {
    options?: Array<{
        description: string,
        value: string
    }>
}