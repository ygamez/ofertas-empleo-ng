
export class Imagenes {
    constructor(public tipo: string,
                public orden: string,
                public imagen: File,
                public imagenes?: Imagenes[]
    ) {

    }

}
