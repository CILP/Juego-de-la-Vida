/**
 * Objeto que representa los metodos y propiedades para
 * renderizar elementos en el canvas.
 * @constructor
 * @param {object} config - Confihuracion inicial del objeto renderizador.
 */
function Render(){}

/**
 * Metodo que permite dibujar una cuadricula en un canvas
 * @method Render.dibujarCuadricula()
 * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
 * @param {object} elemento - Elemento a dibujar
 */

Render.prototype.dibujarCuadricula = function(nombreCanvas, elemento){
  /*
  elemento = {
    type: 'cuadricula',
    color: '#CF1',
    tamano: 32,
    xi: 0,
    xf: 640,
    yi: 0,
    yf: 480
  };
  */
  var canvas = this.canvasVirtual();

  canvas.width = elemento.xf;
  canvas.height = elemento.yf;

  var contexto = canvas.getContext('2d');

  // Dibujamos lineas horizontales
  for (var i = elemento.xi; i <= elemento.yf; i += elemento.tamano){
      contexto.moveTo(elemento.xi, i);
      contexto.lineTo(elemento.xf, i);
  }

  // Dibujamos lineas verticales
  for (var i = elemento.yi; i <= elemento.xf; i += elemento.tamano){
      contexto.moveTo(i, elemento.yi);
      contexto.lineTo(i, elemento.yf);
  }

  // Dibujamos de una sola vez las lineas
  contexto.strokeStyle = elemento.color;
  contexto.stroke();

  // Renderizamos en elemento canvas destino
  var destino = document.getElementById(nombreCanvas).getContext('2d');
  destino.drawImage(canvas, elemento.xi, elemento.yi);

  // Evitamos referencias circulares
  destino = null;
  canvas = contexto = null;
};

/**
 * Metodo que permite dibujar el relleno de un canvas (Fondo de color plano)
 * @method Render.dibujarRelleno()
 * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
 * @param {bool} plano - Relleno plano o relleno de rectangulos
 * @param {object} elemento - Elemento a dibujar
 */
Render.prototype.dibujarRelleno = function(nombreCanvas, plano, elemento){};

/**
 * Metodo que permite dibujar un rectangulo en un canvas
 * @method Render.dibujarRectangulo()
 * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
 * @param {object} elemento - Elemento a dibujar
 */
Render.prototype.dibujarRectangulo = function(nombreCanvas, elemento){};

/**
 * Metodo que permite dibujar una linea en un canvas
 * @method Render.dibujarLinea()
 * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
 * @param {object} elemento - Elemento a dibujar
 */
Render.prototype.dibujarLinea = function(){};

Render.prototype.canvasVirtual = function(){
  return document.createElement('canvas');
};

Render.prototype.renderizar = function(){};
