import {Respuesta} from './respuesta';

export class Pregunta {
    constructor(public pregunta: string,
                public tipo: string,
                public encuestas: string,
                public image?: ArrayBuffer | string,
                public _id?: string,
                public respuesta?: Respuesta[],
                public single1?: number[],
                public single2?: string[]
    ) {

    }

}
