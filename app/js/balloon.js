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
      hue: 'monochrome',
      format: 'hex'
    });

    var style = {
      'left': 'calc(' + getRandom(0, 100)  + '% - 100px)',
      'top': 'calc(' + getRandom(0, 100)  + '% - 500px)',
      'transform': 'scale(0.1)',
      'color': color,
      'opacity': getRandom(0.1, 0.95)
    };

    var newCharacter = $('<div>', {
      'class': 'character'
    }).css(style).text(character).appendTo($('body'));

    setTimeout(function () {
      newCharacter.css('transform', 'scale(' + getRandom(0.1, 1) + ')');
    }, 50);

    
  };

  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  return {
    init: init,
    getRandom: getRandom
  };

}());