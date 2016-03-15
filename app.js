// app.js
// Carlos Linares
var renderizer;

function repaint(){
  window.requestAnimationFrame(repaint);

}

window.addEventListener('load', function(){
  renderizer = new Render()
    .dibujarCuadricula('frente', {
    tipo: 'cuadricula',
    propiedades: {
      tamano: 8,
      color: '#F2E',
      puntoOrigen: {
        x: 32,
        y: 32
      },
      puntoDestino: {
        x: 322,
        y: 322
      }
    }
  });

  repaint();
}, false);

document.onmouseup = function(e){
  e = e || window.event;
  var boton = e.which || e.button;
  return (boton == 1);
};

// TODO
document.onmousemove = function(e){
  // console.info({x: e.pageX, y: e.pageY});
};

// TODO
function configCanvasListener(){
  // frente.canvas.addEventListener('mousemove', function(e){
  //   console.info({x: e.pageX, y: e.pageY});
  // });
}

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 17);
    };
}());
