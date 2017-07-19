export class String {

  public static convertToString(value: any): string {
    return (null !== value ? value.toString() : '');
  }
}
