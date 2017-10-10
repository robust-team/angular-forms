export class ObjectUtils {

  public static clone(object: Object): Object {
    return JSON.parse(JSON.stringify(object));
  }

  public static isEquals(object1: Object, object2: Object): boolean {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }
}
