export interface ISound {
    id?: number;
    name?: string;
    path?: string;
    personId?: number;
  }
  
  export class Sound implements ISound {
    constructor(
        public id?: number,
        public name?: string,
        public path?: string,
        public personId?: number
    ) {}
  }
  