// app.js
// Carlos Linares
var fondo,
    frente;

function repaint(){
  window.requestAnimationFrame(repaint);
}

window.addEventListener('load', function(){
  // Se inican las capas
  fondo = new Mapa(document.getElementById('fondo'), '2d', null, 8);
  frente = new Mapa(document.getElementById('frente'), '2d', null, 8);

  frente.dibujarCuadricula();
  fondo.contexto.fillStyle = "#000";
  fondo.contexto.fillRect(0, 0, fondo.ancho, fondo.alto);
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
