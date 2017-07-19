import { isNullOrUndefined } from 'util';

export class String {

  public static convertToString(value: any): string {
    if ('string' === typeof value) {
      return value;
    }

    return !isNullOrUndefined(value) ? value.toString() : null;
  }
}
