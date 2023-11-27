export interface LogInCredentials {
  email: string;
  password: string;
}

export interface Vendor {
  _id: string;
  username: string;
  email: string;
  password: string;
  __v: number;
}


export interface RegCredentials {
  username: string;
  hashedPassword: string;
  email: string;
}
