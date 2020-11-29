export interface IPerson {
    id?: number;
    name?: string;
    pseudo?: string;
  }
  
  export class Person implements IPerson {
    constructor(
        public id?: number,
        public name?: string,
        public pseudo?: string
    ) {}
  }
  