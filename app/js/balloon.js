var baloon = (function () {
  var init = function () {
    $('.typearea').keypress(function(e) {
      generate(String.fromCharCode(e.which));
    });
  };

  var generate = function (character) {
    if(character === ' ') {
      return;
    }

    var color = randomColor({
      luminosity: 'light',
      format: 'hex'
    });

    var style = {
      'left': getRandom(0, 100) + '%',
      'top': getRandom(0, 100) + '%',
      'transform': 'scale(' + getRandom(1, 40) + ')',
      'color': color,
      'opacity': getRandom(0.1, 0.95)
    };

    $('<div>', {
      'class': 'character'
    }).css(style).text(character).appendTo($('body'));
  };

  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  return {
    init: init,
    getRandom: getRandom
  };

}());