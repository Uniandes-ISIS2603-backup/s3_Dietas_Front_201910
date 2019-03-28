/**
* This class represents a cocina. 
* It contains all the information relevant to the cocina.
*/
export class Calificacionycomentario {

    /**
    * Id de la calificacionycomentario
    */
    id: number;
    
    /**
    * valor de la calificacion
    */
    calificacion: number;
    
    /**
    * comentario
    */
    comentario: string;
    
    /**
    * constructor de la clase
    */
    constructor(id:number, calificacion:number, comentario:string){
    this.id=id;
    this.calificacion=calificacion;
    this.comentario=comentario;
    }
    
    }