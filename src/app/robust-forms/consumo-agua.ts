export class ConsumoAgua {

  public constructor(
    private _origem: string,
    private _consumoMedio: string,
    private _uso: string,
    private _vazao: string
  ) { }

  public get origem(): string {
    return this._origem;
  }

  public get consumoMedio(): string {
    return this._consumoMedio;
  }

  public get uso(): string {
    return this._consumoMedio;
  }

  public get vazao(): string {
    return this._vazao;
  }
}
