export function rotate(...e) {
  console.log(e)
}

export function onMouseDownText(mouseoverState, serMouseoverState) {
  const newFn = (e) => rotate(mouseoverState, serMouseoverState, e)

  window.addEventListener('mousemove', newFn, false);
  // setTimeout(() => {
  //   window.removeEventListener('mousemove', newFn, false)
  // }, 1000)

  return newFn;
}

export function onMouseUpText(newFn) {
  window.removeEventListener('mousemove', newFn, false)
}

export function onTest() {
  let init, start, stop, move, _x, _y,
    active = false;

  const center = document.getElementById('center-rotate');
  const container = document.getElementById('container');
  const rotate = document.getElementById('element-rotate');

  init = () => {
    center.addEventListener('mousedown', start, false);
    window.addEventListener('mousemove', function(event) {
      if (active === true) {
        move(event);
      }
    });
    window.bind('mouseup', (event) => {
      stop(event.originalEvent);
    });
  };

  start = (e) => {
    e.preventDefault();

    let Mx = e.clientX,
      My = e.clientY,
      l = rotate.getBoundingClientRect().left,
      t = rotate.getBoundingClientRect().top;
    // offset
    _x = Mx - l;
    _y = My - t;
    return active = true;
  }

  move = (e) => {
    e.preventDefault();
    let Mx = e.clientX,
      My = e.clientY,
      l = rotate.getBoundingClientRect().left,
      t = rotate.getBoundingClientRect().top,
      w = rotate.getBoundingClientRect().width,
      h = rotate.getBoundingClientRect().height,
      _l = container.getBoundingClientRect().left,
      _t = container.getBoundingClientRect().top,
      _w = container.getBoundingClientRect().width,
      _h = container.getBoundingClientRect().height,
      x, y;
    if (Mx - _x > _l && Mx + w - _l < _w + _x) {
      x = Mx - _x - _l;
    }
    if (My - _y > _t && My + h - _t < _h + _y) {
      y = My - _y - _t;
    }
    return (
      rotate.style.left = x + 'px',
        rotate.style.top = y + 'px'
    );
  };

  stop = () => {
    return active = false;
  };

  init();
}

// const onTestGlob = () => {
//   ///////////////////////////////
// // --------  drag  --------- //
// ///////////////////////////////
//
//   (function() {
//     var init,
//       start, stop, move,
//       _x, _y,
//       active = false,
//       drag = document.getElementById('drag'),
//       d = document.getElementById('draggable'),
//       con = document.getElementById('container');
//
//     init = function() {
//       // Mouse Events
//       drag.addEventListener('mousedown', start, false);
//       window.addEventListener('mousemove', function(event) {
//         if (active === true) {
//           move(event);
//         }
//       });
//       $(document).bind('mouseup', function(event) {
//         stop(event.originalEvent);
//       });
//     };
//
//     start = function(e) {
//       e.preventDefault();
//       // mouse pos
//       var Mx = e.clientX,
//         My = e.clientY,
//         l = d.getBoundingClientRect().left,
//         t = d.getBoundingClientRect().top;
//       // offset
//       _x = Mx - l;
//       _y = My - t;
//       return active = true;
//     };
//
//     move = function(e) {
//       e.preventDefault();
//       var Mx = e.clientX,
//         My = e.clientY,
//         l = d.getBoundingClientRect().left,
//         t = d.getBoundingClientRect().top,
//         w = d.getBoundingClientRect().width,
//         h = d.getBoundingClientRect().height,
//         _l = con.getBoundingClientRect().left,
//         _t = con.getBoundingClientRect().top,
//         _w = con.getBoundingClientRect().width,
//         _h = con.getBoundingClientRect().height,
//         x, y;
//       //check to see if mouse is inside container
//       if (Mx - _x > _l && Mx + w - _l < _w + _x) {
//         // x = mouseX - offsetX - containerX
//         x = Mx - _x - _l ;
//       }
//       if (My - _y > _t && My + h - _t < _h + _y) {
//         // y = mouseY - offsetY - containerY
//         y = My - _y - _t;
//       }
//       return d.style.left = x + 'px', d.style.top = y + 'px';
//     };
//
//     stop = function() {
//       return active = false;
//     };
//
//     init();
//
//   }).call(this);
//
//   (function() {
//     var init, rotate, start, stop,
//       active = false,
//       angle = 0,
//       rotation = 0,
//       startAngle = 0,
//       center = {
//         x: 0,
//         y: 0
//       },
//       R2D = 180 / Math.PI,
//       rot = document.getElementById('rotate');
//
//     init = function() {
//       rot.addEventListener("mousedown", start, false);
//       $(document).bind('mousemove', function(event) {
//         if (active === true) {
//           event.preventDefault();
//           rotate(event);
//         }
//       });
//       $(document).bind('mouseup', function(event) {
//         event.preventDefault();
//         stop(event);
//       });
//     };
//
//     start = function(e) {
//       e.preventDefault();
//       var bb = this.getBoundingClientRect(),
//         t = bb.top,
//         l = bb.left,
//         h = bb.height,
//         w = bb.width,
//         x, y;
//       center = {
//         x: l + (w / 2),
//         y: t + (h / 2)
//       };
//       x = e.clientX - center.x;
//       y = e.clientY - center.y;
//       startAngle = R2D * Math.atan2(y, x);
//       return active = true;
//     };
//
//     rotate = function(e) {
//       e.preventDefault();
//       var x = e.clientX - center.x,
//         y = e.clientY - center.y,
//         d = R2D * Math.atan2(y, x);
//       rotation = d - startAngle;
//       return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
//     };
//
//     stop = function() {
//       angle += rotation;
//       return active = false;
//     };
//
//     init();
//
//   }).call(this);
// }