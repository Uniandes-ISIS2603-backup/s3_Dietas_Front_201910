/**
* This class represents a suspension of the dieta. 
* It contains all the information relevant to the suspension.
*/
export class Suspension {
 
    /**
    * Id de la suspension
    */
    id: number;
    
    /**
    * estado de la suspension
    */
    vigente: boolean;
    
    /**
    * comentarios de la suspension
    */
    comentarios: string;
    
    /**
    * días que dura la suspension
    */
    numeroDias: number;
    
    /**
    * constructor de la clase
    */
    constructor(id:number, vig:boolean, coment:string, numDias:number){
    this.id=id;
    this.vigente=vig;
    this.comentarios=coment;
    this.numeroDias=numDias;
    }
    }
    