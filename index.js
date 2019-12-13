;(function() {
"use strict";
var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//stats.wjt.me.uk/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '98']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
var urls = ["millerdl_birb.png", "millerdl_suit.png", "millerdl_chewbacca.png", "millerdl_viking.jpg", "millerdl_question.png", "millerdl.png", "millerdl_kwoo.png", "beard-hair-redistribution.png", "president-millerdl.png", "millerdl_birb_beard.jpg", "foghorn-dlm.png", "millerdl_bday.jpg", "santa.png", "millerdl_birb_beard_grin.jpg", "millerdl_trotsky.png"];
var link = document.querySelector('.somewhat-unfortunate');
link.addEventListener('click', function(event) {
    event.preventDefault();
    update();
});
update();

function update() {
    var n = urls.length;
    var i = Math.floor(Math.random() * n);
    var url = 'img/' + urls[i];

    var img = document.createElement('img');
    img.classList.add('really-awful');
    img.onload = function() {
        // Match the top-left pixel's background colour
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, 1, 1);
        var r = data.data[0];
        var g = data.data[1];
        var b = data.data[2];
        var a = data.data[3];  // though alpha is really over-egging the pudding
        var rgba = 'rgba(' + [r, g, b, (a / 255).toFixed(3)].join(',') + ')';
        document.body.style.backgroundColor = rgba;

        link.replaceChild(img, link.firstElementChild);
    };
    img.onerror = function(e) {
        console.error("extremely unfortunate", i, url, e);
    };
    img.src = url;
}
}());
