export interface IUser {
    id?: number;
    login?: string;
    token?: string;
  }
  
  export class User implements IUser {
    constructor(
        public id?: number,
        public login?: string,
        public token?: string
    ) {}
  }
  