import { FormControl } from './form-control'

export interface MultiChoiceControl extends FormControl {
    options?: Array<{
        description: string,
        value: string
    }>
}