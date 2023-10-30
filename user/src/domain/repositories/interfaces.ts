export interface RegCredentials {
  username: string;
  password: string;
  email: string;
}

export interface loggedUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  __v: number;
}
