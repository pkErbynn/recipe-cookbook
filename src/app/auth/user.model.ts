export class User {
  constructor(
    public email: string,
    // localId as user id
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  // token is only read cus it's automatically created when user signs in
  get token() {
    // can't get token when expired
    if (!this._tokenExpirationDate || this._tokenExpirationDate < new Date()) {
      return null;
    }
    return this._token;
  }
}
