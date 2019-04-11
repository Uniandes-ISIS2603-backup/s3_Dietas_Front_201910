import{Persona} from'./persona';
export class PersonaDetail extends Persona {
  
    /**
     * tiempo de espera de mejora de la persona
     */
    tiempoEsperadoMejora: number;

    /**
    * Estado de solicitud Especial de la persona
    */
    solcitudEspecial: boolean;
    /**
    * Estado de tarjeta de fidelidad de la persona
    */
    tarjetaFidelidad: boolean;

    //constructor(tipo: string,name: string, id:number,fechaIngreso:string,//objetivos:string,tiempoEsperadoMejora:number,solicitudEspecial:boolean
    //tarjetaFidelidad:boolean)
  //  {
  //    super(tipo,name,id);
  //    this.fechaIngreso=fechaIngreso;
  //    this.obejtivos=objetivos;
  //    this.solcitudEspecial=solicitudEspecial;
  //    this.tarjetaFidelidad=tarjetaFidelidad;
  //    this.tiempoEsperadoMejora=tiempoEsperadoMejora;
   // }


}