import { isNullOrUndefined } from 'util';

export class String {

  public static convertToString(value: any, allowNull: boolean = true): string {
    return !isNullOrUndefined(value) ? value.toString() : (allowNull ? null : '');
  }
}
