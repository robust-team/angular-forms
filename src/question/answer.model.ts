export class Answer<T> {

  public constructor(
    public value: T,
    public id?: number | string
  ) { }
}
