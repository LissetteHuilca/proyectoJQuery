class Usuario{
    constructor(objUser){
        this.nombre = objUser.nombre;
        this.usuario = objUser.usuario;
        this.pass = objUser.pass;
        var rompecabezas = [];
          $.each(objUser.rompecabezas, function(i, rmp){
            rompecabezas.push(new Rompecabeza(rmp));   
        });
        this.rompecabezas = rompecabezas;
    }
}

class Rompecabeza{
    constructor(objRmp){
        this.titulo = objRmp.titulo;
        this.portada = objRmp.portada;
        this.sonido = objRmp.sonido;
        
         var piezas = [];
          $.each(objRmp.piezas, function(i, pieza){
            piezas.push(new Pieza(pieza));   
        });
        this.piezas = piezas;
    }
}

class Pieza{
    constructor(objPieza){
        this.imagen = objPieza.imagen;
        this.orden = objPieza.orden;
    }
}





















