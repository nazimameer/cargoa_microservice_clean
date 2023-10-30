export interface RegCredentials {
    username: string;
    hashedPassword: string;
    email: string;
  }

export interface LogInCredentials {
    email: string;
    password: string;
}

export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    __v: number;
  }