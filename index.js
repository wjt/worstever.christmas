;(function() {
    'use strict';

    var imgs = document.querySelectorAll('img');
    var n = imgs.length;
    var i = Math.floor(Math.random() * n);
    var img = imgs[i];

    img.classList.add('picked');

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, 1);
    /* TODO: doesn't work, I think the jpeg loads async */
    var r = data.data[0];
    var g = data.data[1];
    var b = data.data[2];
    var a = data.data[3];
    var rgba = [r, g, b, (a / 255).toFixed(3)].join(',');
    console.log(rgba);

    document.body.appendChild(canvas);
}());
