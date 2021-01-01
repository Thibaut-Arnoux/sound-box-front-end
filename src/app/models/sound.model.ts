export interface ISound {
    id?: number;
    name?: string;
    fileUrl?: string;
    PersonId?: number;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export class Sound implements ISound {
    constructor(
        public id?: number,
        public name?: string,
        public fileUrl?: string,
        public PersonId?: number,
        public createdAt?: string,
        public updatedAt?: string
    ) {}
  }
  