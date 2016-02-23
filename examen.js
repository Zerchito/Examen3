
String.prototype.cambiarElementos = function (primero , segundo){
    var aux;
    var aux1;
    var respuesta;
    var index;
    if ( primero >= 0 && primero < this.length && segundo >= 0 && segundo < this.length ) {
        aux = this[primero];
        aux1 = this[segundo];
        respuesta = '';
        for( index = 0 ; index < this.length ; index++ ){
            if( index === primero) {
                respuesta = respuesta + aux1;
            } else {
                if( index === segundo ){
                    respuesta = respuesta + aux;
                } else {
                    respuesta = respuesta + this[index];
                }
            }

        }
    } else {
        console.log('No existen dichos elementos.')
    }
    return respuesta;
}

String.prototype.agregarMayusculaAlMedio = function(word){
    var index;
    var respuesta='';
    for( index = 0 ; index < this.length/2 ; index++ ){
        respuesta = respuesta + this[index];
    }
    respuesta = respuesta + word.toUpperCase();
    for( index ; index < this.length ; index++ ){
        respuesta = respuesta + this[index];
    }
    return respuesta;
}

String.prototype.agregarMayusculaAlInicio = function(word){

    return word.toUpperCase()+this;
}

String.prototype.agregarMayusculaAlFinal = function(word){
    return this+word.toUpperCase();
}
