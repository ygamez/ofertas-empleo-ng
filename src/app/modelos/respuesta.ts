import {Pregunta} from './pregunta';

export class Respuesta {
    constructor(public respuesta: string,
                public pregunta: string,
                public image?: ArrayBuffer | string,
                public _id?: string,
                public status?: boolean,
                public votos?: number
    ) {

    }

}
