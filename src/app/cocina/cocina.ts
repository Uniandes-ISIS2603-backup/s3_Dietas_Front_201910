/**
* This class represents a cocina. 
* It contains all the information relevant to the cocina.
*/
export class Cocina {

    /**
    * Id de la cocina
    */
    id: number;
    
    /**
    * direccion de la cocina
    */
    direccion: string;
    
    /**
    * constructor de la clase
    */
    constructor(id:number,  direc:string){
    this.id=id;
    this.direccion= direc;
    }
    
    
    }