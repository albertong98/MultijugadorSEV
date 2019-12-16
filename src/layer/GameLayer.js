class GameLayer extends Layer{
        constructor() {
            super();
        }
        
        iniciar(){
            this.unidadesJugador1 = [];
            this.unidadesJugador2 = [];
        }
        // En cada iteración fp del juego
        actualizar (){
    
        }
    
        dibujar (){
    
        }
    
        // Para capas con elementos táctiles
        // Calcula en que botón caen las pulsaciones
        calcularPulsaciones(pulsaciones){
    
        }
    
        // Para enviar ordenes de control
        // mover jugador, etc.
        procesarControles(){
    
        }

        cargarMapa(ruta) {
            var fichero = new XMLHttpRequest();
            fichero.open("GET", ruta, false);
    
            fichero.onreadystatechange = function() {
                var texto = fichero.responseText;
                var lineas = texto.split('\n');
                this.anchoMapa = (lineas[0].length - 1) * 40;
                this.altoMapa = lineas.length * 32;
                for (var i = 0; i < lineas.length; i++) {
                    var linea = lineas[i];
                    for (var j = 0; j < linea.length; j++) {
                        var simbolo = linea[j];
                        var x = 40 / 2 + j * 40; // x central
                        var y = 32 + i * 32; // y de abajo
                        this.cargarObjetoMapa(simbolo, x, y);
                    }
                }
            }.bind(this);
    
            fichero.send(null);
        }
    
        cargarObjetoMapa(simbolo, x, y) {
            switch (simbolo) {
                case '.':
                    var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                    bloque.y = bloque.y - bloque.alto / 2;
                    // modificación para empezar a contar desde el suelo
                    this.bloques.push(bloque);
                    break;
                case "O":
                    var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                    bloque.y = bloque.y - bloque.alto / 2;
                    // modificación para empezar a contar desde el suelo
                    this.bloques.push(bloque);
                    var obstaculo = new Obstaculo(x, y);
                    obstaculo.y = obstaculo.y - obstaculo.alto / 2;
                    this.obstaculos.push(obstaculo);
                    break;
                case "*":
                    var bloque = new Bloque(imagenes.bloque_hierba, x, y);
                    bloque.y = bloque.y - bloque.alto / 2;
                    // modificación para empezar a contar desde el suelo
                    this.bloques.push(bloque);
                    var bandera = new Bloque(imagenes.bandera, x, y);
                    bandera.y = bandera.y - bandera.alto / 2;
                    this.bloques.push(bandera);
                    break;
                case "A":
                    var base = new Base(x, y);
                    base.y = base.y - base.alto / 2;
                    this.baseAliada = base;
                    break;
                case "V":
                    var base = new Base(x, y);
                    base.y = base.y - base.alto / 2;
                    this.baseEnemiga = base;
                    break;
            }
        }
}